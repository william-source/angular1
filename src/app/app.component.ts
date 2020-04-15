import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'William Sean Wiyogo';
  itembuah = [{
    nama : 'Kelengkeng',
    harga : 10000
  },{
    nama:'Jeruk',
    harga:5000
  }];
  itemArr=['aa','bb','cc','dd'];

  show: boolean = true;
  user=""
  pesan='';
  klikButton(){
    this.pesan='Tombol ditekan';
  }
  
  
data=0
coba=''
 pangkat(a,b){
   this.data=Math.pow(a,b)
   if (this.data%2==0)
   {
     this.coba="genap"
   }
   else
   {
     this.coba="ganjil"
   }
 }


}
