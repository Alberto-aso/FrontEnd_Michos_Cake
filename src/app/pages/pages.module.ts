import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importacion de Modulos
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

//Importacion de componentes de pages module
import { MainComponent } from './main/main.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [ //Declaracion de los componentes para peges modules
    PagesComponent,
    MainComponent
  ],
  exports:[ //Exportacion de componentes a los demas modulos
    PagesComponent,
    MainComponent
  ],
  imports: [ // Importacion de los modulos necesarios para pages module
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
