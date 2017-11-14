import { Component } from '@angular/core';
// comp decorator by using the @
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObj = {
    location: 'LA',
    name: 'Josh',
    age: '40'
  }
  myArr = [1,2,3]
}
