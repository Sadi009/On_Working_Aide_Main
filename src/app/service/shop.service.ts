import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private db: AngularFirestore) { }

  getShopList(): Observable<any> {
    return this.db.collection("shops").get();
  }
}