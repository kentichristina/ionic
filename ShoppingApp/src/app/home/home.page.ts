import { GroceryService } from './../service/grocery.service';
import { Component } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
grocerylist
  constructor(private grocery:GroceryService) {
    this.grocerylist=this.grocery.getItems();
  }
 
}
