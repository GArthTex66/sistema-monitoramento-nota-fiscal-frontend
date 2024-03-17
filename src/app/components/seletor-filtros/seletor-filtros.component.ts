import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seletor-filtros',
  templateUrl: './seletor-filtros.component.html',
  styleUrls: ['./seletor-filtros.component.css']
})
export class SeletorFiltrosComponent implements OnInit {
  displayFiltroEstado: boolean = false;

  displayFiltroData: boolean = false;

  dateValue: Date;

  estadoSelecionado: any;

  estados: any[];

  showDialogFiltroEstado() {
      this.displayFiltroEstado = true;
  }

  showDialogFiltroData() { 
    this.displayFiltroData = true;
  }

  closeDialogFiltroEstado() {
    setTimeout(()=>{
      this.displayFiltroEstado = false;
      this.displayFiltroData = false;
      console.log(this.estadoSelecionado.name)
      this.router.navigate(['/notas-fiscais'], { queryParams: { value: this.estadoSelecionado.name, filter:"estado" } });
    }, 1000)
  }

  closeDialogFiltroData() {
    setTimeout(()=>{
      this.displayFiltroEstado = false;
      this.displayFiltroData = false;
      console.log(this.dateValue)
      this.router.navigate(['/notas-fiscais'], { queryParams: { value: this.dateValue, filter:"data" } });
    }, 1000)
  }

  constructor(private router: Router) { }

  
  ngOnInit(): void {

    this.estados = ['AM','MG','SP' ,'GO','RJ','MS','MT','PE','RS','PR','SVAN','SVRS','SVC-AN','SVC-RS']
      .map(estado=>({name:estado, code:estado}));
  }

  
  

}
