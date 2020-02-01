import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getUsers(document): Observable<any> {
    return this.db.collection("users").doc(document).get();
  }
  editUser(data) {
    this.db.collection("users").doc(data.id).update(data);
    console.log("a:-",data.id);
}
}
