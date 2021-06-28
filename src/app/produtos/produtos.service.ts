import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService{

    constructor(private http: HttpClient){

    }

    protected UrlServiceV1:string = "http://localhost:3000/";

    obterProdutos() : Observable<Produto[]>{
        return this.http.get<Produto[]>(this.UrlServiceV1 + "produtos");
    }

    obterProduto(id : number) : Observable<Produto>{
        return this.http.get<Produto>(this.UrlServiceV1 + "produtos/" + id);
    }

    excluirProduto(id: number): void {
        this.http.delete(this.UrlServiceV1 + "produtos/" + id).subscribe();
    }

}