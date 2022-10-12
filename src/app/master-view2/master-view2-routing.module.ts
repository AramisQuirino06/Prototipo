import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView2Component } from './master-view2.component';
import { TramiteDeCreditoComponent } from './tramite-de-credito/tramite-de-credito.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { BuroComponent } from './buro/buro.component';
import { DatosEmpresaNoComponent } from './datos-empresa-no/datos-empresa-no.component';
import { BuroConfirmadoComponent } from './buro-confirmado/buro-confirmado.component';
import { DatosEmpresaComponent } from './datos-empresa/datos-empresa.component';

const routes: Routes = [{ path: '', component: MasterView2Component, children: [{ path: '', redirectTo: 'tramite-de-credito', pathMatch: 'full' }, { path: 'tramite-de-credito', component: TramiteDeCreditoComponent, data: { text: 'Tramite de credito' } }, { path: 'datos-personales', component: DatosPersonalesComponent, data: { text: 'Datos Personales' } }, { path: 'buro', component: BuroComponent, data: { text: 'Buro' } }, { path: 'datos-empresa-no', component: DatosEmpresaNoComponent, data: { text: 'Datos Empresa No' } }, { path: 'buro-confirmado', component: BuroConfirmadoComponent, data: { text: 'Buro Confirmado' } }, { path: 'datos-empresa', component: DatosEmpresaComponent, data: { text: 'Datos Empresa' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView2RoutingModule {
}
