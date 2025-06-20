import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Disciplina } from '../disciplina.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editor-de-disciplina',
  imports: [FormsModule,RouterModule],
  standalone: true,
  templateUrl: './editor-de-disciplina.html',
  styleUrl: './editor-de-disciplina.css'
})
export class EditorDeDisciplina {

  @Input()
  nome : string | null = "";

  @Input()
  descricao: string | null  = "";

  @Input()
  id:number = 0

  @Input()
  disciplinas= [new Disciplina(0," "," ")];

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
      const novaDisciplina = new Disciplina(this.id,this.nome || '', this.descricao || '');
      this.onSalvar.emit(novaDisciplina);
  }

  cancelar() {
    this.onCancelar.emit();
  }

  editar(disciplina:Disciplina) {
    this.onEditar.emit(disciplina);
  }


}
