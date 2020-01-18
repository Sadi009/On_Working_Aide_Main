import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private db: AngularFirestore) {}

  getAllCategory(): Observable<any> {
    return this.db.collection("category", ref => ref.where("module", "==", "doctor")).get();
  }

  getAllDoctors(): Observable<any> {
    return this.db.collection("doctors").get();
  }

  addAppointment(data) {
    let doc = this.db.collection("appointments").ref.doc();
    data["id"] = doc.id;
    doc.set(data);
  }
}
