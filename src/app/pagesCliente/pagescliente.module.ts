import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


//Importamos los componentes del shared cliente
import { SharedClienteModule } from '../sharedCliente/shared-cliente.module';

//Importacion de componentes para cliente modulo
import { PagesClienteComponent } from './pages-cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { CotizarComponent } from './cotizar/cotizar.component';



@NgModule({
  declarations: [
    InicioComponent,
    PagesClienteComponent,
    MenuComponent,
    PortafolioComponent,
    CotizarComponent
  ],
  exports:[
    InicioComponent,
    PagesClienteComponent,
    MenuComponent,
    PortafolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedClienteModule
  ]
})
export class PagesclienteModule { }
