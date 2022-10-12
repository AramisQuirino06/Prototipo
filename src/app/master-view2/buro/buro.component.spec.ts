import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxSliderModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule } from 'igniteui-angular';
import { BuroComponent } from './buro.component';

describe('BuroComponent', () => {
  let component: BuroComponent;
  let fixture: ComponentFixture<BuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuroComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxSliderModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
