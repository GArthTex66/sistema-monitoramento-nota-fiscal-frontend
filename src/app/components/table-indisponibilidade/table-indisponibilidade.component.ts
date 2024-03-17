import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/shared/service/notas.service';

@Component({
  selector: 'app-table-indisponibilidade',
  templateUrl: './table-indisponibilidade.component.html',
  styleUrls: ['./table-indisponibilidade.component.css']
})
export class TableIndisponibilidadeComponent implements OnInit {

  estadosPorNumIndisponivel = []

  constructor(private notasService: NotasService) { }

  ngOnInit(): void {
    this.getIndisponibilidade();
  }

  getIndisponibilidade() {
    this.notasService.getIndisponibilidade().subscribe((data) => {
      this.estadosPorNumIndisponivel = data;
      console.log(this.estadosPorNumIndisponivel);
    });
  }

}
