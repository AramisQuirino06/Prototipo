import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxGridModule, IgxActionStripModule } from 'igniteui-angular';
import { VistaPrincipalComponent } from './vista-principal.component';

describe('VistaPrincipalComponent', () => {
  let component: VistaPrincipalComponent;
  let fixture: ComponentFixture<VistaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPrincipalComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxGridModule, IgxActionStripModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
