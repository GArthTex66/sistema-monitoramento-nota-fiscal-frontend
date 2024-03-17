import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from 'src/app/shared/service/notas.service';
import { Observable } from 'rxjs';
import {mergeMap} from 'rxjs/operators';
@Component({
  selector: 'app-table-notas',
  templateUrl: './table-notas.component.html',
  styleUrls: ['./table-notas.component.css']
})
export class TableNotasComponent implements OnInit {
 
  notas = [];
  obs:Observable<[]> ;

  constructor(private notasService:NotasService, private route:ActivatedRoute ) {}

  ngOnInit(): void {
    this.obs = this.route.queryParamMap.pipe(params => {
      console.log(params['params']);
      if(params['params']?.filter === 'estado')
        return this.notasService.getNotasPorEstado(params['params'].data);
      else if(params['params']?.filter === 'data')
        return this.notasService.getNotasPorData(params['params'].data);
      else
      return this.notasService.getNotas();
    });

    this.obs.subscribe((data) => {
      this.notas = data;
      console.log(this.notas);
    });
  }

}
