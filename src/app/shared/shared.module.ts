import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router'

//Importacion de componentes en el shared module
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [ //Declaramos los componentes
    BreadcumbsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  exports:[ //Exportamos los componentes
    BreadcumbsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { } //solamente sera importado en pages module porque solo ahi se usa
