import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  template: `
  <div  class="p-3 mb-2 bg-dark text-white">
    <div class="d-flex flex-row justify-content-center"><h2>Advertisement</h2></div>
    <div class="d-flex flex-row justify-content-center p-3">
      <button class="btn btn-light" routerLink="/tablecomponent"><h3>Form-Dashboard</h3></button>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <button type="button" class="btn btn-warning" routerLink="/formcomponent">Form</button>
    </div>
  </div> 
  ` ,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
