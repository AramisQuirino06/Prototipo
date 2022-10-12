import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { TramiteDeCreditoINICIOComponent } from './tramite-de-credito-inicio/tramite-de-credito-inicio.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { HistorialComponent } from './historial/historial.component';
import { SoporteComponent } from './soporte/soporte.component';
import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MasterViewComponent,
    TramiteDeCreditoINICIOComponent,
    ExpedienteComponent,
    HistorialComponent,
    SoporteComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    FormsModule
  ]
})
export class MasterViewModule {
}
