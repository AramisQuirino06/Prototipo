import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxSliderModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule } from 'igniteui-angular';
import { BuroConfirmadoComponent } from './buro-confirmado.component';

describe('BuroConfirmadoComponent', () => {
  let component: BuroConfirmadoComponent;
  let fixture: ComponentFixture<BuroConfirmadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuroConfirmadoComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxSliderModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuroConfirmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
