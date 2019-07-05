import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

export interface testing {
  name:string,
  unit:string,
  amount:number,
  id:string
}


@Injectable({
  providedIn: "root"
})
export class FirestoreService {

  recipes: AngularFirestoreCollection<testing>;


  constructor(private db: AngularFirestore) {
    //this.recipes = this.db.collection<testing>();
  }

  createRecipe(data:testing) {
    console.log("Triggered");

    return new Promise<testing>((resolve, reject) => {
      this.db
        .collection("recipies")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }
  getCoffeeOrders() { 
    let res = this.db.collection("recipies").snapshotChanges();
    console.log(res);
    
    return res
  }
}
