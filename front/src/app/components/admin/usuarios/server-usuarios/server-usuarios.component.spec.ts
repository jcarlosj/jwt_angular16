import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerUsuariosComponent } from './server-usuarios.component';

describe('ServerUsuariosComponent', () => {
  let component: ServerUsuariosComponent;
  let fixture: ComponentFixture<ServerUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerUsuariosComponent]
    });
    fixture = TestBed.createComponent(ServerUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
