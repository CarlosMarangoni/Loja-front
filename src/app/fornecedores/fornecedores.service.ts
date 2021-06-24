import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Fornecedor } from "./fornecedor";

@Injectable()
export class FornecedorService{

    constructor(private http: HttpClient){

    }

    protected UrlServiceV1:string = "http://localhost:3000/";

    obterFornecedores() : Observable<Fornecedor[]>{
        return this.http.get<Fornecedor[]>(this.UrlServiceV1 + "fornecedores");
    }

    // obterFornecedor(id : number) : Observable<Fornecedor>{
    //     return this.http.get<Fornecedor>(this.UrlServiceV1 + "fornecedores/" + id);
    // }

}