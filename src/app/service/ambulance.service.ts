import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbulanceService {

  constructor(private db: AngularFirestore) { }

  getAllAmbulances(): Observable<any> {
    return this.db.collection("ambulances").get();
  }
}
