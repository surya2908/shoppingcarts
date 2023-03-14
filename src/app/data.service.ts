import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
allProducts:any[]=[
  { id:1 , pdtname:'biscuit', pdtprice:60, pdtqty:0},
  { id:2, pdtname:'dairy Milk', pdtprice:80, pdtqty:0},
  {id:3 ,pdtname:'vim', pdtprice:20, pdtqty:0},
  { id:4 ,pdtname:'rusk', pdtprice:45, pdtqty:0},
  { id:5 , pdtname:'soap', pdtprice:35, pdtqty:0},
  { id:6, pdtname:'oil', pdtprice:180, pdtqty:0},
  { id:7, pdtname:'chocolate', pdtprice:150, pdtqty:0},
  { id:8 , pdtname:'good day', pdtprice:60, pdtqty:0}
];

viewItem:any[]=[];

  constructor() { }

qtyAdd(i:number){
this.allProducts[i].pdtqty++;
}

qtySub(i:number){
this.allProducts[i].pdtqty--;
}

cartAdd(value:any){
this.viewItem.push(value);
}

totalAmt(value:any) { 
  console.log(value.pdtprice);
  for(let i=0 ; value.length>i ; i++){
  console.log( 'test', value[0].pdtprice )
    
  }
}
pushProducts(name:string , price:number){
  var id=this.allProducts
  
this.allProducts.push( {id:id.length+1,pdtname:name , pdtprice: Number( price) , pdtqty:0 }  )
console.log('id',id.length);
console.log('allPdt',this.allProducts);
}


}
