import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Disciplina } from './disciplina.model';
import { FormsModule } from '@angular/forms';
import { DisciplinasService } from './disciplinas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selecionado : null | Disciplina = null
  nome : string | null = "";
  descricao: string | null  = "";
  editando: Disciplina | null = null
  disciplinas: Disciplina[] = []

  constructor (private disciplinaService: DisciplinasService){
this.atualizarLista();
  }
 
  atualizarLista(){
    this.disciplinaService.todas().subscribe( disciplinas => this.disciplinas = disciplinas)
  }

  selecionar(disciplina: Disciplina){
    this.selecionado=disciplina
  }

  salvar() {
    if(this.editando){
      try{
        this.disciplinaService.salvar(this.editando?.id,this.nome as string).subscribe(disciplina => {
         this.atualizarLista();
        })
     
        }
        catch(e){
           console.log(e)
        }     
    }else{
      try{
        this.disciplinaService.salvar(null,this.nome as string)
      }
      catch(e){
        console.log(e)
      }

    }

  }

 excluir(disciplina:Disciplina) {
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {

            try{
             {
            } this.disciplinaService.excluir(disciplina.id)
            }
            catch(e){
              console.log(e)
            }
      }
    }
  }

  editar(disciplina:Disciplina) {
    this.nome = disciplina.nome;
    this.editando = disciplina;
  }

  cancelar() {
    this.disciplinaService.cancelar()
  }

}
