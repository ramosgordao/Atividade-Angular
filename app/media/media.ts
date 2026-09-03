import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media {
  ac1 = 0;
  ac2 = 0;
  ag = 0;
  af = 0;

  media: number | null = null;
  situacao = '';

  calcular(): void {
    this.media =
      (this.ac1 * 0.15) +
      (this.ac2 * 0.30) +
      (this.ag * 0.10) +
      (this.af * 0.45);

    if (this.media >= 5) {
      this.situacao = 'Aprovado';
    } else {
      this.situacao = 'Reprovado';
    }
  }
}
