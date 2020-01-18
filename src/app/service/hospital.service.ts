import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private db: AngularFirestore) { }

  getAllHospital(): Observable<any> {
    return this.db.collection("hospitals").get();
  }
}
