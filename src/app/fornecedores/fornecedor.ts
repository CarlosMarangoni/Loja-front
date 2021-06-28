export class Fornecedor{
    id:number;
    cnpj:string;
    nome:string;
    telefone: string;
    email:string;    


    constructor(cnpj: string, telefone: string,nome:string,id:number,email:string){
        this.id=id;
        this.nome=nome;
        this.cnpj=cnpj;
        this.telefone=telefone;
        this.email=email;
    }

    
}