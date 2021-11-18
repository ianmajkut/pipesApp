import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';


import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEsAr from '@angular/common/locales/es-AR';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEsAr);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    //Definimos de manera global 'es-AR'
    {provide: LOCALE_ID, useValue: 'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
