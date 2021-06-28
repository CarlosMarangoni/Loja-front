import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Fornecedor } from '../fornecedores/fornecedor';
import { FornecedorService } from '../fornecedores/fornecedores.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styles: [
  ]
})
export class ListSuppliersComponent implements OnInit {

  public fornecedores: Fornecedor[] | undefined;

  constructor(private fornecedorService: FornecedorService, public dialog: MatDialog, private snackBar: MatSnackBar,private _router:Router) {
    this.fornecedorService = fornecedorService;
  }

  ngOnInit(): void {
    this.fornecedorService.obterFornecedores()
      .subscribe(
        fornecedores => {
          this.fornecedores = fornecedores;
          console.log(fornecedores)
        },
        error => console.log(error)
      );
  }

  openDialog(fornecedorId: number) {
    fornecedor: Fornecedor;

    this.fornecedorService.obterFornecedor(fornecedorId).subscribe(
      supplier => {
        supplier = supplier;
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
          data: {
            fornecedor: supplier
          }
        });


        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.fornecedorService.excluirFornecedor(fornecedorId);
            let novo = this.fornecedores?.filter(item => item.id !== fornecedorId);
            this.fornecedores = novo;
            this.snackBar.open("Fornecedor excluído com sucesso!", '', {
              duration: 5000,
              verticalPosition: 'top'
            })
          }
        });
      });

     

  }

  edit(id:number){
    this._router.navigate(['/fornecedores', id]);
  }

}
