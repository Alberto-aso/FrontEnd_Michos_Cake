import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

//Componentes
import { Page404Component } from './pageNotFound/page404/page404.component';

//Componentes para la pagina de administrador
import { PagesRoutingModule } from './pages/pages.routing';

//Componentes del auth (login)
import { AuthRoutingModule } from './auth/auth.routing';

//Componentes para el cliente
import { ClienteRoutingModule } from './pagesCliente/pagesCliente.routing';

const routes: Routes = [
  { path: '**', component: Page404Component }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    ClienteRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
