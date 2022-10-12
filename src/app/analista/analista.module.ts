import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalistaRoutingModule } from './analista-routing.module';
import { AnalistaComponent } from './analista.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxGridModule, IgxActionStripModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnalistaComponent,
    VistaPrincipalComponent
  ],
  imports: [
    CommonModule,
    AnalistaRoutingModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxGridModule,
    IgxActionStripModule,
    FormsModule
  ]
})
export class AnalistaModule {
}
