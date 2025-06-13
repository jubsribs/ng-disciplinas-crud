import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeDisciplinas } from './lista-de-disciplinas';

describe('ListaDeDisciplinas', () => {
  let component: ListaDeDisciplinas;
  let fixture: ComponentFixture<ListaDeDisciplinas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeDisciplinas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeDisciplinas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
