import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppointmentService {
  constructor(private db: AngularFirestore) { }

  getPatients() {
    return this.db.collection("appointments").get();
  }
  
  editPatient(data){
    this.db.collection("appointments").doc(data.id).update(data);
  }
  getDoctor(data) {
    return this.db.collection("doctors").doc(data.chamber).get();
  }

  cancelAppointment(data) {
    this.db.collection("appointments").doc(data.id).update({status: "canceled"});
  }
}
