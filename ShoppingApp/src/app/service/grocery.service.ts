import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class GroceryService {
list;
  constructor(private angularfirestore:AngularFirestore) { }
  getItems(){
 return this.angularfirestore.collection("Grocery").valueChanges();
  }
}
