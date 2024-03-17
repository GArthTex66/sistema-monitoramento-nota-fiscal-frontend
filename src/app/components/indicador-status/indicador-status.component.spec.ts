import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorStatusComponent } from './indicador-status.component';

describe('IndicadorStatusComponent', () => {
  let component: IndicadorStatusComponent;
  let fixture: ComponentFixture<IndicadorStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
