//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { Page404Component } from './pageNotFound/page404/page404.component';

//Modulos generados
import { PagesModule } from './pages/pages.module'; //Importamos el modulo pages
import { AuthModule } from './auth/auth.module'; //Importamos el modulo auth

import { PagesclienteModule } from './pagesCliente/pagescliente.module';

@NgModule({
  declarations: [ //declaramos los componentes
    AppComponent,
    Page404Component,
  ],
  imports: [ //Importamos los modulos generados en el sistema
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    PagesclienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
