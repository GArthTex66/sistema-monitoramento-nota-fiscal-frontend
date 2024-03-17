import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table'
import {TooltipModule} from 'primeng/tooltip';
import {MenuModule} from 'primeng/menu';
import {SlideMenuModule} from 'primeng/slidemenu';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';


import { AppComponent } from './app.component';
import { TableNotasComponent } from './components/table-notas/table-notas.component';
import { IndicadorStatusComponent } from './components/indicador-status/indicador-status.component';
import { TableIndisponibilidadeComponent } from './components/table-indisponibilidade/table-indisponibilidade.component';
import { TableUltimaAtualizacaoComponent } from './components/table-ultima-atualizacao/table-ultima-atualizacao.component';
import { MenuSelectorComponent } from './components/menu-selector/menu-selector.component';
import { SeletorFiltrosComponent } from './components/seletor-filtros/seletor-filtros.component';

@NgModule({
  declarations: [
    AppComponent,
    TableNotasComponent,
    IndicadorStatusComponent,
    TableIndisponibilidadeComponent,
    TableUltimaAtualizacaoComponent,
    MenuSelectorComponent,
    SeletorFiltrosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    TooltipModule,
    MenuModule,
    SlideMenuModule,
    CardModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
