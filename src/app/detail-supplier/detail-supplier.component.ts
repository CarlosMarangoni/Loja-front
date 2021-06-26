import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fornecedor } from '../fornecedores/fornecedor';
import { FornecedorService } from '../fornecedores/fornecedores.service';

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styles: [
  ]
})
export class DetailSupplierComponent implements OnInit {

  public id: any;
  public fornecedor: Fornecedor | undefined;

  constructor(private fornecedorService:FornecedorService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.fornecedorService.obterFornecedor(this.id)
      .subscribe(
        fornecedor =>{
          this.fornecedor = fornecedor;
          console.log(fornecedor)
        },
        error => console.log(error)
      );
  }

}
