import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ViewCartsComponent } from './view-carts/view-carts.component';

const routes: Routes = [

  {path:"allProducts", component:ProductsComponent},
  {path: "viewCart" , component:ViewCartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
