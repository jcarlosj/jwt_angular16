import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUsuariosComponent } from './vista-usuarios.component';

describe('VistaUsuariosComponent', () => {
  let component: VistaUsuariosComponent;
  let fixture: ComponentFixture<VistaUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaUsuariosComponent]
    });
    fixture = TestBed.createComponent(VistaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
