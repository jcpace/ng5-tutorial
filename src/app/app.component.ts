import { Component } from '@angular/core';
// comp decorator by using the @
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Tour of Heroes'
}
