import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
{path: 'inicio', component: InicioComponent},
{path: 'destinos', component:DestinosComponent},
{path: 'nosotros', component:NosotrosComponent},
{path: 'contacto', component:ContactoComponent},
{path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
