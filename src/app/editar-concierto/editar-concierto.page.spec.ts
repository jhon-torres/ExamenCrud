import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarConciertoPage } from './editar-concierto.page';

describe('EditarConciertoPage', () => {
  let component: EditarConciertoPage;
  let fixture: ComponentFixture<EditarConciertoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarConciertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
