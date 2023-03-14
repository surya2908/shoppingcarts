import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    this.productList = this.serve.allProducts;

  }

  productList: any[] = [];
  viewCarts: any[] = [];
  cartCount: number = 0;
  isView = false;
  temList: any[] = [];
  totAmt: number = 0;
  msg: string = '';
  searchTxt: string = '';
  isAddProduct = false;
  img: any;
  errorMsg:string='';



  constructor(public serve: DataService) {


  }

  submit(f: NgForm) {
    if(f.value.pdtName.length==0 || f.value.pdtPrice.length==0){

    } 
    else{
    this.serve.pushProducts(f.value.pdtName, f.value.pdtPrice);
    f.reset();
    this.isAddProduct = !this.isAddProduct;
    console.log('sub imge', this.img.name);
    console.log('img', f.value)
    this.img.name;
    this.msg = 'Product Added successfull';
    setTimeout(() => {
      this.msg = ''
    }, 2000);}
  }
  addProduct() {
    this.isAddProduct = !this.isAddProduct;
  }

  image(event: any) {
    this.img = event.target.files[0];
    
  }



  addQty(ind: number) {
    this.serve.qtyAdd(ind)
  }
  subQty(ind: number) {
    this.serve.qtySub(ind)
  }
  addCart(value: any) {
    this.msg = 'My Cart Added Successfull'
    setTimeout(() => {
      this.msg = ''
    }, 2000);

    this.cartCount++;
    this.serve.cartAdd(value);
    this.viewCarts = this.serve.viewItem;
    this.totalAmount(this.viewCarts)

  }
  removeCart(ind: any) {
    if (confirm('Are you sure to Remove cart ?')) {
      this.viewCarts.splice(ind, 1)
      this.totalAmount(this.viewCarts)
      this.cartCount--;
    }

  }

  showViewCarts() {
    if (this.cartCount == 0) {
      this.isView = false;
      this.errorMsg='cart is Empty';
      setTimeout(() => {
        this.errorMsg = ''
      }, 1500);
    } else {
      this.isView = !this.isView;
    }
  }

  totalAmount(value: any) {

    var tot = 0;
    for (let i = 0; i < value.length; i++) {

      tot = value[i].pdtprice * value[i].pdtqty + tot;
      if (tot) {
        this.totAmt = tot;
      }

    }
    console.log('final', this.totAmt)
    return this.totAmt;

    //  for(let it of value){
    //   var i =it.pdtprice*it.pdtqty
    //   this.totAmt=i
    //  }
    //  console.log('final',this.totAmt)
    //  return this.totAmt;


  }

}
