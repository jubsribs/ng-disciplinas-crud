import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Disciplina } from '../disciplina.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor-de-disciplina',
  imports: [FormsModule],
  templateUrl: './editor-de-disciplina.html',
  styleUrl: './editor-de-disciplina.css'
})
export class EditorDeDisciplina {

  @Input()
  nome : string | null = "";

  @Input()
  descricao: string | null  = "";

  @Input()
  disciplinas= [new Disciplina(" "," ")];

  @Input()
  editando : Disciplina | null = null;


  @Output()
  onSalvar = new EventEmitter<Disciplina>();

  @Output()
  onCancelar = new EventEmitter<Disciplina>();

  @Output()
  onEditar = new EventEmitter<Disciplina>();


  constructor() {
  }

  ngOnInit() {
  }

  salvar() {
    this.onSalvar.emit();
  }

  cancelar() {
    this.onCancelar.emit();
  }

  editar(disciplina:Disciplina) {
    this.onEditar.emit(disciplina);
  }


}
