//Mudulos
import { NgModule } from '@angular/core'; //Importar ng modlule
import {RouterModule, Routes} from '@angular/router' //Importar El modulo de Rutas

//Componentes para la pagina de clientes
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { CotizarComponent } from './cotizar/cotizar.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PagesClienteComponent } from './pages-cliente.component';


const routes : Routes = [ //Constante de Rutas
  {path: '', component: PagesClienteComponent, //Creamos la ruta inicial de la aplicacion para el cliente
    children: [
      {path: 'inicio', component: InicioComponent}, //Creamos la ruta del componente
      {path: 'menu', component: MenuComponent}, //Creamos la ruta del componente
      {path: 'portafolio', component: PortafolioComponent}, //Creamos la ruta del componente
      {path: 'cotizar', component: CotizarComponent}, //Creamos la ruta del componente
      {path: '', redirectTo: 'inicio', pathMatch: 'full'}, //creamos la ruta por default del path
    ]
  },
  ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ClienteRoutingModule { } //Exportamos el app Routing Module