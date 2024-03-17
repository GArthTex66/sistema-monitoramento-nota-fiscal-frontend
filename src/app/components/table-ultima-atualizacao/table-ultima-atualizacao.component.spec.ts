import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUltimaAtualizacaoComponent } from './table-ultima-atualizacao.component';

describe('TableUltimaAtualizacaoComponent', () => {
  let component: TableUltimaAtualizacaoComponent;
  let fixture: ComponentFixture<TableUltimaAtualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUltimaAtualizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUltimaAtualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
