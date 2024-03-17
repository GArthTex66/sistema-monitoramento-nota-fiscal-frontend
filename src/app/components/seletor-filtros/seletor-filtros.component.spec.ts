import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorFiltrosComponent } from './seletor-filtros.component';

describe('SeletorFiltrosComponent', () => {
  let component: SeletorFiltrosComponent;
  let fixture: ComponentFixture<SeletorFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeletorFiltrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletorFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
