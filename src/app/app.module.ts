import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { HomeComponent } from './navigation/home/home.component';
import { rootRouterConfig } from './app.routes';
import { ListProductComponent } from './list-product/list-product.component';
import { ListSuppliersComponent } from './list-suppliers/list-suppliers.component';
import { ProdutoService } from './produtos/produtos.service';
import { FornecedorService } from './fornecedores/fornecedores.service';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailSupplierComponent } from './detail-supplier/detail-supplier.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ListProductComponent,
    ListSuppliersComponent,
    DetailProductComponent,
    DetailSupplierComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig,{useHash: false}),
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports:[
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    ProdutoService,
    FornecedorService
  ],
  bootstrap: [AppComponent],
  entryComponents:[DeleteDialogComponent]
})
export class AppModule { }
 