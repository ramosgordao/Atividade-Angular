import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice-seguro',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './seguro.html',
  styleUrl: './seguro.css'
})
export class seguro {
  nome = '';
  sexo = '';
  idade = 0;
  valorAutomovel = 0;

  valorApolice: number | null = null;

  calcularApolice(): void {
    if (this.sexo === 'masculino') {
      if (this.idade <= 25) {
        this.valorApolice = this.valorAutomovel * 0.15;
      } else {
        this.valorApolice = this.valorAutomovel * 0.10;
      }
    } else if (this.sexo === 'feminino') {
      this.valorApolice = this.valorAutomovel * 0.08;
    } else {
      this.valorApolice = null;
    }
  }
}
