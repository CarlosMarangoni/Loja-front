import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedores/fornecedor';
import { FornecedorService } from '../fornecedores/fornecedores.service';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styles: [
  ]
})
export class NewSupplierComponent {

 

  constructor(private fornecedorService: FornecedorService) {
    this.fornecedorService = fornecedorService;

  }

  save(fornecedor: Fornecedor) {
    this.fornecedorService.salvarFornecedor(fornecedor);
  }

  onSubmit(data: any) {
    console.warn(data);
  }

}
