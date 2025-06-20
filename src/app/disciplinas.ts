import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DisciplinasService {
  private disciplinas: Disciplina[] = [];
  API_URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) {}

  todas() {
    return this.http.get<Disciplina[]>(this.API_URL + '/disciplinas');
  }

  salvar(id: number|null, nome: string, descricao?: string) {
    let editDisciplina = {id:id, nome: nome, descricao: descricao };
    if (id) {
        editDisciplina.nome = nome;
        editDisciplina.descricao = descricao;
        return this.http.patch(
          this.API_URL + '/disciplina' + id,
          editDisciplina
        );
    }
    editDisciplina.id = this.gerarProximoId()
    return this.http.post(this.API_URL + '/disciplinas' + editDisciplina, {
      observe: 'body',
    });
  }

  excluir(id: number): void {
    this.http.delete<void>(`${this.API_URL+"/disciplinas"}/${id}`);
  }

  encontrar(params: number | string) {
   return this.http.get(this.API_URL+"/disciplinas"+params)
  }

  cancelar(): void {
    this.disciplinas = [];
  }

  private gerarProximoId() {
    if (this.disciplinas.length === 0) return 1;

    const maiorId = Math.max(...this.disciplinas.map((d) => d.id));
    return maiorId + 1;
  }
}
