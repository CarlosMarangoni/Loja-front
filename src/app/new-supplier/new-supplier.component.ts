import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedores/fornecedor';
import { FornecedorService } from '../fornecedores/fornecedores.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styles: [
  ]
})
export class NewSupplierComponent implements OnInit{

  formFornecedor!: FormGroup;
  private isEdicao:boolean=false;
  // @ts-ignore: Object is possibly 'null'.
  private fornId = +this.route.snapshot.paramMap.get('id');

  constructor(private fornecedorService: FornecedorService,private snackBar: MatSnackBar,private route:ActivatedRoute) {
    this.fornecedorService = fornecedorService;

  }

  ngOnInit(){
    this.isEdicao=false;
    this.createForm(new Fornecedor());
      if(this.fornId){
        this.isEdicao=true;
        this.obterFornecedor(this.fornId) 

      }

  }

  createForm(fornecedor:Fornecedor){
    this.formFornecedor = new FormGroup({
      id: new FormControl(fornecedor.id),
      cnpj: new FormControl(fornecedor.cnpj),
      nome: new FormControl(fornecedor.nome),
      telefone: new FormControl(fornecedor.telefone),
      email: new FormControl(fornecedor.email)
    })
  }

  onSubmit() {
    if(this.isEdicao){
      this.fornecedorService.editarFornecedor(this.formFornecedor.value,this.fornId)
    }else{
      this.fornecedorService.salvarFornecedor(this.formFornecedor.value)
      
    }
    this.formFornecedor.reset();
    this.snackBar.open("Fornecedor cadastrado com sucesso!", '', {
      duration: 5000,
      verticalPosition: 'top'
    })

  }

  obterFornecedor(id:number){
    this.fornecedorService.obterFornecedor(id).subscribe(
      (fornecedor:Fornecedor)=>this.createForm(fornecedor),
      (err:any)=>console.log(err)
    );
  }

  
  }


