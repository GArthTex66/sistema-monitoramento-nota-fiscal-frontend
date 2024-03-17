import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuSelectorComponent } from './components/menu-selector/menu-selector.component';
import { TableNotasComponent } from './components/table-notas/table-notas.component';
import { SeletorFiltrosComponent } from './components/seletor-filtros/seletor-filtros.component';
import { TableIndisponibilidadeComponent } from './components/table-indisponibilidade/table-indisponibilidade.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home'  , component: MenuSelectorComponent},
  {path: 'notas-fiscais' , component: TableNotasComponent},
  {path: 'seletor-filtros' , component: SeletorFiltrosComponent},
  {path: 'indisponibilidade' , component: TableIndisponibilidadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
