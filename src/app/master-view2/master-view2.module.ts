import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView2RoutingModule } from './master-view2-routing.module';
import { MasterView2Component } from './master-view2.component';
import { TramiteDeCreditoComponent } from './tramite-de-credito/tramite-de-credito.component';
import { IgxSliderModule, IgxInputGroupModule, IgxSelectModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { BuroComponent } from './buro/buro.component';
import { DatosEmpresaNoComponent } from './datos-empresa-no/datos-empresa-no.component';
import { BuroConfirmadoComponent } from './buro-confirmado/buro-confirmado.component';
import { DatosEmpresaComponent } from './datos-empresa/datos-empresa.component';

@NgModule({
  declarations: [
    MasterView2Component,
    TramiteDeCreditoComponent,
    DatosPersonalesComponent,
    BuroComponent,
    DatosEmpresaNoComponent,
    BuroConfirmadoComponent,
    DatosEmpresaComponent
  ],
  imports: [
    CommonModule,
    MasterView2RoutingModule,
    IgxSliderModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule
  ]
})
export class MasterView2Module {
}
