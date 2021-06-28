import { Routes } from "@angular/router"
import { DetailProductComponent } from "./detail-product/detail-product.component"
import { ListProductComponent } from "./list-product/list-product.component"
import { ListSuppliersComponent } from "./list-suppliers/list-suppliers.component"
import { HomeComponent } from "./navigation/home/home.component"
import { NewSupplierComponent } from "./new-supplier/new-supplier.component"
import { ListProductAdminComponent } from './list-product-admin/list-product-admin.component'

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cliente/produtos', component: ListProductComponent},
    { path: 'produtos', component: ListProductAdminComponent},
    { path: 'cliente/produtos/:id', component: DetailProductComponent},
    { path: 'fornecedores', component: ListSuppliersComponent},
    { path: 'fornecedores/:id', component: NewSupplierComponent},
    { path: 'fornecedores/novo', component: NewSupplierComponent}

]