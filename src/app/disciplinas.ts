import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  private disciplinas: Array<Disciplina> | null = null
  private id : number = 3

  constructor(private http:HttpClient, private disciplinaService : DisciplinasService) {
    this.carregarDados(http)
   }


   carregarDados(callback:any){
this.http.get<Disciplina[]>("src/assets/dados/disciplinas.json").subscribe(disciplinas => this.disciplinas = disciplinas).add(callback)
   }

   todas():Array<Disciplina> | null{
    return this.disciplinas;
   }

   salvar(id:number,nome:string|null,descricao:string|null):Disciplina{
    if(id){
      let editDisciplina = this.encontrar(id);
      if(editDisciplina){
        editDisciplina.nome = nome
        editDisciplina.descricao = descricao
        return editDisciplina;
      }
    }
      const createDisciplina = new Disciplina(this.id,nome,descricao)
      this.disciplinas?.push(createDisciplina)
      this.id++;
      return createDisciplina
   }

   excluir(disciplina: number | Disciplina):void{
    let isDisciplinaId = null

    if(typeof(disciplina)=== "number"){
      isDisciplinaId = this.encontrar(disciplina)
    }
    else {
      isDisciplinaId = this.encontrar(disciplina.id)
    }
    if(isDisciplinaId!=null){
      const disciplinaId= this.disciplinas?.indexOf(isDisciplinaId)
      if(disciplinaId!=undefined){
        this.disciplinas?.splice(disciplinaId,1)
      }
    }
    else{
      console.log("Não foi possível encontrar a Disciplina")
    }
   }

   encontrar(params: number | string){
    let isDisciplina = null

    if(typeof(params)=== "number"){
      isDisciplina = this.disciplinas?.filter(isDisciplina => isDisciplina.id === params)
    }
    else{
      isDisciplina = this.disciplinas?.filter(isDisciplina => isDisciplina.nome === params)
    }
    if(isDisciplina!=null && isDisciplina.length>0){
      return isDisciplina[0]
    }
    else{
      return null;
    }
   }
}
