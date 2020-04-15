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
arr=[]
pola=""
x=0
y=0
i=0
u=0
bool:boolean;
 pangkat(a,b){
   this.data=Math.pow(a,b)
   if (this.data%2==0)
   {
     this.coba="genap"
     this.bool=true
     this.pola="Pola B"
     this.x=b
     this.y=this.data
     while(this.x!=this.y)
     {
       for(this.i=0;this.i<this.x;this.i++)
       {
         this.arr[this.u].append("*")
       }
      this.u++
      this.x++
     }
   }
   else
   {
     this.coba="ganjil"
     this.bool=false;
     this.pola="Pola A"
   }
 }



}
