import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramiteDeCreditoINICIOComponent } from './tramite-de-credito-inicio.component';

describe('TramiteDeCreditoINICIOComponent', () => {
  let component: TramiteDeCreditoINICIOComponent;
  let fixture: ComponentFixture<TramiteDeCreditoINICIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramiteDeCreditoINICIOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramiteDeCreditoINICIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
