import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu'


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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ListProductComponent,
    ListSuppliersComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig,{useHash: false}),
    BrowserAnimationsModule,
    MatMenuModule
  ],
  exports:[
    MatMenuModule
  ],
  providers: [
    ProdutoService,
    FornecedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 