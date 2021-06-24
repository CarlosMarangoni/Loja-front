import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos/produto';
import { ProdutoService } from '../produtos/produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styles: [
  ]
})
export class DetailProductComponent implements OnInit {

  public id: any;
  public produto: Produto | undefined;

  constructor(private produtoService:ProdutoService,private route: ActivatedRoute) { 
    this.produtoService=produtoService;
    this.route=route;
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.produtoService.obterProduto(this.id)
      .subscribe(
        produto =>{
          this.produto = produto;
          console.log(produto)
        },
        error => console.log(error)
      );
  }

}
