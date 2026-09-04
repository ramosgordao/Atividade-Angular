import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'apptemperatura',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './temperatura.html',
  styleUrl: './temperatura.css'
})
export class temperatura {
  celsius = 0;

  fahrenheit: number | null = null;
  kelvin: number | null = null;

  converter(): void {
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}
