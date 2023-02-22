//Mudulos
import { NgModule } from '@angular/core'; //Importar ng modlule
import {RouterModule, Routes} from '@angular/router' //Importar El modulo de Rutas

//Componentes para la pagina administrador
import { PagesComponent } from './pages.component'; //Importamos el componente
import { MainComponent } from './main/main.component';


const routes : Routes = [ //Constante de Rutas
  {path: 'pages', component: PagesComponent,
    children: [
      { path: 'main', component: MainComponent, data: {titulo: "Main"} }, //Creamos la ruta del componente
      { path: '', redirectTo: 'main', pathMatch: 'full' }, //Creamos la ruta por default del path
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { } //Exportamos el app Routing Module