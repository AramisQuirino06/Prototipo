import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView1RoutingModule } from './master-view1-routing.module';
import { MasterView1Component } from './master-view1.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxCheckboxModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { NuevoIngresoComponent } from './nuevo-ingreso/nuevo-ingreso.component';

@NgModule({
  declarations: [
    MasterView1Component,
    IngresarComponent,
    NuevoIngresoComponent
  ],
  imports: [
    CommonModule,
    MasterView1RoutingModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxCheckboxModule
  ]
})
export class MasterView1Module {
}
