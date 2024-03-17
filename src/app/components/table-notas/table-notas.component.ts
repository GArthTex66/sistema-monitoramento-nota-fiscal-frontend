import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from 'src/app/shared/service/notas.service';

@Component({
  selector: 'app-table-notas',
  templateUrl: './table-notas.component.html',
  styleUrls: ['./table-notas.component.css']
})
export class TableNotasComponent implements OnInit {

  notas = [];

  constructor(private notasService:NotasService, private route:ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      console.log(params['params']);
    });
    this.getNotas();
  }

  getNotas() {
    this.notasService.getNotas().subscribe((data) => {
      this.notas = data;
      console.log(this.notas);
    });
  }


}
