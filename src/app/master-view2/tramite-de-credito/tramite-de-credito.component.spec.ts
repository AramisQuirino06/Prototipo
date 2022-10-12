import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxSliderModule, IgxInputGroupModule, IgxSelectModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { TramiteDeCreditoComponent } from './tramite-de-credito.component';

describe('TramiteDeCreditoComponent', () => {
  let component: TramiteDeCreditoComponent;
  let fixture: ComponentFixture<TramiteDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramiteDeCreditoComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxSliderModule, IgxInputGroupModule, IgxSelectModule, IgxIconModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramiteDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
