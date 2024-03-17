import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIndisponibilidadeComponent } from './table-indisponibilidade.component';

describe('TableIndisponibilidadeComponent', () => {
  let component: TableIndisponibilidadeComponent;
  let fixture: ComponentFixture<TableIndisponibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIndisponibilidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIndisponibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
