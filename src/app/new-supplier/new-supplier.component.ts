import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedores/fornecedor';
import { FornecedorService } from '../fornecedores/fornecedores.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styles: [
  ]
})
export class NewSupplierComponent {

  constructor(private fornecedorService: FornecedorService,private snackBar: MatSnackBar) {
    this.fornecedorService = fornecedorService;

  }

  onSubmit(data: Fornecedor) {
    this.fornecedorService.salvarFornecedor(data);
    this.snackBar.open("Fornecedor cadastrado com sucesso!", '', {
      duration: 5000,
      verticalPosition: 'top'
    })

  }

}
