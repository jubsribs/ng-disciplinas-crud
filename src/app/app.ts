import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListaDeDisciplinas} from "./lista-de-disciplinas/lista-de-disciplinas"
import { EditorDeDisciplina } from './editor-de-disciplina/editor-de-disciplina';
import { CommonModule } from '@angular/common';
import { Disciplina } from './disciplina.model';
import { FormsModule } from '@angular/forms';
import { DisciplinasService } from './disciplinas';

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
  editando : Disciplina = new Disciplina(0,"", "");
  disciplinas: Array<Disciplina> | null = null;

  constructor (private disciplinaService: DisciplinasService){
    this.disciplinas = this.disciplinaService.todas()
  }
 
  selecionar(disciplina: Disciplina){
    this.selecionado=disciplina
  }

  salvar() {
   try{
    const salveDisciplina = this.disciplinaService.salvar(this.editando?.id,this.editando?.nome,this.editando?.descricao)
    this.editando = new Disciplina(0,"", "");
   }
   catch(e){
      console.log(e)
   }

  }

  excluir(disciplina:Disciplina) {
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {

            try{
              this.disciplinaService.excluir(disciplina)
            }
            catch(e){
              console.log(e)
            }
      }
    }
  }

  editar(disciplina:Disciplina) {
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao;
    this.editando = disciplina;
  }

  cancelar() {
    this.nome = " ";
    this.descricao =  " ";
    this.editando = new Disciplina(0,"", "");
  }

}
