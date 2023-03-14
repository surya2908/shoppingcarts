import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-carts',
  templateUrl: './view-carts.component.html',
  styleUrls: ['./view-carts.component.css']
})
export class ViewCartsComponent {
  viewCarts:any[]=[];

constructor(public user:DataService){
  this.dofun()
}

@Input()myCarts=this.viewCarts

dofun(){
  console.log('view', this.viewCarts)
}


}
