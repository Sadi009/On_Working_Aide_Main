import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  patientsList = [];
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    console.log("Data Loading...");
		this.appointmentService.getPatients().subscribe(patients => {
			patients.forEach(element => {
				this.patientsList.push(element.data());
			});
		});
  }
  

}
