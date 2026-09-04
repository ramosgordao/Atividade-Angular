import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperior } from './menu-superior/menu-superior';
import { Media } from './media/media';
import { seguro } from './seguro/seguro';
import { CalculadoraImcComponent } from './calculadora/calculadora';
import { temperatura } from './temperatura/temperatura';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Media,
    seguro,
    temperatura,
    CalculadoraImcComponent,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
