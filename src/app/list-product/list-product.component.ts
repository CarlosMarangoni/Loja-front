import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos/produto';
import { ProdutoService } from '../produtos/produtos.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styles: [
  ]
})
export class ListProductComponent implements OnInit {
  
  public produtos: Produto[] | undefined;

  constructor(private produtoService:ProdutoService) { 
    this.produtoService=produtoService;
   }


  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos =>{
          this.produtos = produtos;
          console.log(produtos)
        },
        error => console.log(error)
      );
  }

}
