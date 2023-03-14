import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTxt: string): any {
   
    if(searchTxt.length===0 || value.length===0){

    return value;
   }
   
   var arr=[];
   for(var i=0 ; i<value.length ; i++){
    if(value[i]['pdtname'].toLowerCase().includes(searchTxt.toLowerCase())){
    arr.push(value[i]);
    }
   }
   return arr;

  //  var src=searchTxt.toLowerCase();
   
  //  value.filter(id=> {
  //   return  id.pdtname.toLowerCase().includes(src);
  //  });
   
  // return  console.log( 'fil');
  }

}
