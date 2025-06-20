import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Disciplina } from '../disciplina.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-lista-de-disciplinas',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './lista-de-disciplinas.html',
  styleUrl: './lista-de-disciplinas.css'
})
export class ListaDeDisciplinas {

  @Input()
  disciplinas= [new Disciplina(0," "," ")];

  @Input()
  editando : Disciplina | null = null;

  @Input()
  selecionado : null | Disciplina = null

  @Output()
  onEditar = new EventEmitter<Disciplina>();

  @Output()
  onExcluir = new EventEmitter<Disciplina>();

  @Output()
  onSelecionar = new EventEmitter<Disciplina>();



  constructor() {
  }

  ngOnInit() {
  }

  excluir(disciplina:Disciplina) {
    this.onExcluir.emit(disciplina);
  }

  editar(disciplina:Disciplina) {
    this.onEditar.emit(disciplina);
  }

  selecionar(disciplina: Disciplina){
   this.onSelecionar.emit(disciplina);
  }

}
