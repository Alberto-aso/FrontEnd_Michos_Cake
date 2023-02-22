//Mudulos
import { NgModule } from '@angular/core'; //Importar ng modlule
import { RouterModule, Routes } from '@angular/router' //Importar El modulo de Rutas
import { AuthComponent } from './auth.component';

//Componentes
import { LoginComponent } from './login/login.component';


const routes: Routes = [ //Constante de Rutas
    {
        path: 'auth', component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent }, //Creamos la ruta independiente del login
            { path: '', redirectTo: 'login', pathMatch: 'full' }, //Creamos la ruta por default del path
        ]
    }
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
export class AuthRoutingModule { } //Exportamos el app Routing Module