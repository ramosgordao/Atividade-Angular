import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-imc',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class CalculadoraImcComponent {
  peso = 0;
  altura = 0;

  imc: number | null = null;
  classificacao = '';

  calcular(): void {
    if (this.peso > 0 && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);

      if (this.imc < 18.5) {
        this.classificacao = 'Abaixo do peso';
      } else if (this.imc <= 24.9) {
        this.classificacao = 'Peso normal';
      } else if (this.imc <= 29.9) {
        this.classificacao = 'Sobrepeso';
      } else if (this.imc <= 34.9) {
        this.classificacao = 'Obesidade grau I';
      } else if (this.imc <= 39.9) {
        this.classificacao = 'Obesidade grau II';
      } else {
        this.classificacao = 'Obesidade grau III';
      }
    } else {
      this.imc = null;
      this.classificacao = 'Informe valores válidos.';
    }
  }
}
