import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  getLatestProducts(): Observable<any> {
    return this.db.collection("products", ref => ref.orderBy("created").limit(5)).get();
  }

  getTrendingProducts(): Observable<any> {
    return this.db.collection("products", ref => ref.where("trending", "==", true)).get();
  }
}