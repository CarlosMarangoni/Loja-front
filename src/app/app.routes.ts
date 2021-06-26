import { Routes } from "@angular/router"
import { DetailProductComponent } from "./detail-product/detail-product.component"
import { DetailSupplierComponent } from "./detail-supplier/detail-supplier.component"
import { ListProductComponent } from "./list-product/list-product.component"
import { ListSuppliersComponent } from "./list-suppliers/list-suppliers.component"
import { HomeComponent } from "./navigation/home/home.component"

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'produtos', component: ListProductComponent},
    { path: 'produtos/:id', component: DetailProductComponent},
    { path: 'fornecedores', component: ListSuppliersComponent},
    { path: 'fornecedores/:id', component: DetailSupplierComponent}

]