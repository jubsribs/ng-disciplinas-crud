import { Routes } from '@angular/router';
import { ListaDeDisciplinas } from './lista-de-disciplinas/lista-de-disciplinas';
import { EditorDeDisciplina } from './editor-de-disciplina/editor-de-disciplina';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'disciplinas',
    component: ListaDeDisciplinas,
  },
  {
    path: 'disciplinas/:id',
    component: EditorDeDisciplina,
  },
];
