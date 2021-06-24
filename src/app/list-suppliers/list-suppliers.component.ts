import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedores/fornecedor';
import { FornecedorService } from '../fornecedores/fornecedores.service';

@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styles: [
  ]
})
export class ListSuppliersComponent implements OnInit {

  public fornecedores: Fornecedor[] | undefined;

  constructor(private fornecedorService:FornecedorService) { 
    this.fornecedorService=fornecedorService;
  }

  ngOnInit(): void {
    this.fornecedorService.obterFornecedores()
      .subscribe(
        fornecedores =>{
          this.fornecedores = fornecedores;
          console.log(fornecedores)
        },
        error => console.log(error)
      );
  }

}
