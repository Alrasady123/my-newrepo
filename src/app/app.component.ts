import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  myObj = {
    nam : 'hemed',
    age : 2023 - 2005,
    address : 'Maungani',
    job : 'jobless'
  };
  myarr = [
    'a',
    'b',
    'c'
  ]

}
