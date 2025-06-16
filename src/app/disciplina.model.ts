export class Disciplina {
    id : number;
    nome: string | null; 
    descricao: string | null;


    constructor (id : number, nome: string | null, descricao: string | null){
        this.id=id;
        this.nome=nome;
        this.descricao=descricao;
    }
}
