import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView1Component } from './master-view1.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { NuevoIngresoComponent } from './nuevo-ingreso/nuevo-ingreso.component';

const routes: Routes = [{ path: '', component: MasterView1Component, children: [{ path: '', redirectTo: 'ingresar', pathMatch: 'full' }, { path: 'ingresar', component: IngresarComponent, data: { text: 'Ingresar' } }, { path: 'nuevo-ingreso', component: NuevoIngresoComponent, data: { text: 'Nuevo ingreso' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView1RoutingModule {
}
