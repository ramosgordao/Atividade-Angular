import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Media } from './media/media';
import { seguro } from './seguro/seguro';
import { CalculadoraImcComponent } from './calculadora/calculadora';
import { temperatura } from './temperatura/temperatura';

const routes: Routes = [
  { path: '', redirectTo: 'media', pathMatch: 'full' },
  { path: 'media', component: Media },
  { path: 'seguro', component: seguro },
  { path: 'calculadora', component: CalculadoraImcComponent },
  { path: 'temperatura', component: temperatura },
  { path: '**', redirectTo: 'media' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
