import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Importar componentes
import { HeaderClienteComponent } from './header-cliente/header-cliente.component';
import { FooterClienteComponent } from './footer-cliente/footer-cliente.component';



@NgModule({
  declarations: [//Declarar componentes en pagina del cliente
    HeaderClienteComponent,
    FooterClienteComponent
  ],
  exports:[ //Exportamos los componentes
    HeaderClienteComponent,
    FooterClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedClienteModule { } //solamente estara en el clienteMoodule porque solo ahi sera utilizado

