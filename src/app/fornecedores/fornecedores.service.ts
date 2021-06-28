import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Fornecedor } from "./fornecedor";

@Injectable()
export class FornecedorService {

    status: string = "";

    constructor(private http: HttpClient) {

    }

    protected UrlServiceV1: string = "http://localhost:3000/";

    obterFornecedores(): Observable<Fornecedor[]> {
        return this.http.get<Fornecedor[]>(this.UrlServiceV1 + "fornecedores");
    }

    excluirFornecedor(id: number): void {
        this.http.delete(this.UrlServiceV1 + "fornecedores/" + id).subscribe();
    }

    obterFornecedor(id: number): Observable<Fornecedor> {
        return this.http.get<Fornecedor>(this.UrlServiceV1 + "fornecedores/" + id);
    }

    salvarFornecedor(fornecedor: Fornecedor) {
        return this.http.post<Fornecedor>(this.UrlServiceV1 + "fornecedores", fornecedor).toPromise().then(data => { console.log(data) });
    }

    editarFornecedor(fornecedor: Fornecedor,id:number) {
        return this.http.put<Fornecedor>(this.UrlServiceV1 + "fornecedores/" + id, fornecedor).toPromise().then(data => { console.log(data) });
    }

}