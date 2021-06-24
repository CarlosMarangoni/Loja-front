export class Produto{
    id:number;
    nome:string;
    descricao:string;
    valor: number;

    constructor(descricao: string, valor: number,nome:string,id:number){
        this.id=id;
        this.nome=nome;
        this.descricao=descricao;
        this.valor=valor;
    }

    
}