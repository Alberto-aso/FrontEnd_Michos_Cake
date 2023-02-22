import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importamos los modulos
import { RouterModule } from '@angular/router';

//Componente de el auth module
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [ //Declaramos los componentes
    LoginComponent, 
    AuthComponent
  ],
  exports:[ //Exportamos los componentes
    LoginComponent,
    AuthComponent 
  ],
  imports: [
    CommonModule,
    RouterModule //Importamos el routerModule para la logica de rutas
  ]
})
export class AuthModule { }


