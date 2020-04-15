import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'William Sean Wiyogo';
  item = {
    nama : 'Kelengkeng',
    harga : 10000
  };
}
