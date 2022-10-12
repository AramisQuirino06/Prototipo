import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalistaComponent } from './analista.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';

const routes: Routes = [{ path: '', component: AnalistaComponent, children: [{ path: '', redirectTo: 'vista-principal', pathMatch: 'full' }, { path: 'vista-principal', component: VistaPrincipalComponent, data: { text: 'Vista principal' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalistaRoutingModule {
}
