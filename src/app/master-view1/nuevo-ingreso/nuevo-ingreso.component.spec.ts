import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxCheckboxModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { NuevoIngresoComponent } from './nuevo-ingreso.component';

describe('NuevoIngresoComponent', () => {
  let component: NuevoIngresoComponent;
  let fixture: ComponentFixture<NuevoIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoIngresoComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxCheckboxModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
