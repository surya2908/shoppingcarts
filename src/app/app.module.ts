import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ViewCartsComponent } from './view-carts/view-carts.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ViewCartsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
