import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDeDisciplina } from './editor-de-disciplina';

describe('EditorDeDisciplina', () => {
  let component: EditorDeDisciplina;
  let fixture: ComponentFixture<EditorDeDisciplina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorDeDisciplina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorDeDisciplina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
