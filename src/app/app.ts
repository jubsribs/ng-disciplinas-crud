import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListaDeDisciplinas} from "./lista-de-disciplinas/lista-de-disciplinas"
import { EditorDeDisciplina } from './editor-de-disciplina/editor-de-disciplina';
import { CommonModule } from '@angular/common';
import { Disciplina } from './disciplina.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListaDeDisciplinas,CommonModule,FormsModule,EditorDeDisciplina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selecionado : null | Disciplina = null
  nome : string | null = "";
  descricao: string | null  = "";
  editando : Disciplina | null = null;

  disciplinas = [new Disciplina("Lingua Portuguesa", "Essa matéria fala portugues")];
 
  selecionar(disciplina: Disciplina){
    this.selecionado=disciplina
  }

  salvar() {
    if (this.editando) {
      console.log(this.editando)
      this.editando.nome = this.nome;
      console.log(this.editando.nome)
      this.editando.descricao = this.descricao;
    } else {
      const d = new Disciplina(this.nome, this.descricao);
      this.disciplinas.push(d);
    }
    this.nome = " ";
    this.descricao = " ";
    this.editando = null;
  }

  excluir(disciplina:Disciplina) {
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
      }
    }
  }

  editar(disciplina:Disciplina) {
    this.nome = disciplina.nome;
    console.log(this.nome)
    this.descricao = disciplina.descricao;
    this.editando = disciplina;
  }

  cancelar() {
    this.nome = " ";
    this.descricao =  " ";
    this.editando = null;
  }

}
