import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaClientes } from './grafica-clientes';

describe('GraficaClientes', () => {
  let component: GraficaClientes;
  let fixture: ComponentFixture<GraficaClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaClientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaClientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
