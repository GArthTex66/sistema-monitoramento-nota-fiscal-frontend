import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicador-status',
  templateUrl: './indicador-status.component.html',
  styleUrls: ['./indicador-status.component.css']
})
export class IndicadorStatusComponent{

  @Input() status: string = '';

  constructor() { }


}
