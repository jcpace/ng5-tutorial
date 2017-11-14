import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
