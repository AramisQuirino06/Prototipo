import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { TramiteDeCreditoINICIOComponent } from './tramite-de-credito-inicio/tramite-de-credito-inicio.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { HistorialComponent } from './historial/historial.component';
import { SoporteComponent } from './soporte/soporte.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: '', redirectTo: 'tramite-de-credito-inicio', pathMatch: 'full' }, { path: 'tramite-de-credito-inicio', component: TramiteDeCreditoINICIOComponent, data: { text: 'Tramite de credito INICIO' } }, { path: 'expediente', component: ExpedienteComponent, data: { text: 'Expediente' } }, { path: 'historial', component: HistorialComponent, data: { text: 'Historial' } }, { path: 'soporte', component: SoporteComponent, data: { text: 'Soporte' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}
