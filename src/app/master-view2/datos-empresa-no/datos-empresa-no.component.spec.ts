import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxSliderModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { DatosEmpresaNoComponent } from './datos-empresa-no.component';

describe('DatosEmpresaNoComponent', () => {
  let component: DatosEmpresaNoComponent;
  let fixture: ComponentFixture<DatosEmpresaNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEmpresaNoComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxSliderModule, IgxIconModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEmpresaNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
