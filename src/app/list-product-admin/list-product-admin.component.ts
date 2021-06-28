import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos/produto';
import { ProdutoService } from '../produtos/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-list-product-admin',
  templateUrl: './list-product-admin.component.html',
  styles: [
  ]
})
export class ListProductAdminComponent implements OnInit {

  public produtos: Produto[] | undefined;

  constructor(private produtoService:ProdutoService,public dialog: MatDialog,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos)
        },
        error => console.log(error)
      );
  }
  
  openDialog(produtoId:number){
    
    
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.produtoService.excluirProduto(produtoId);
            let novo = this.produtos?.filter(item => item.id !== produtoId);
            this.produtos = novo;
            this.snackBar.open("Produto excluído com sucesso!", '', {
              duration: 5000,
              verticalPosition: 'top'
            })
          }
        });
  }



  edit(id:number){

  }

}
