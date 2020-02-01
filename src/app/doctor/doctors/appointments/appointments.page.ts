import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  patientsList = [];

  details = 'upcoming';
  isAndroid = false;
  constructor(private platform: Platform, private appoinmentService: AppointmentService) {
    this.isAndroid = this.platform.is('android');
  }
  ngOnInit() {
    console.log("Data Loading...");
		this.appoinmentService.getPatients().subscribe(patients => {
			patients.forEach(element => {
				console.log(element.data());
				this.patientsList.push(element.data());
			});
		});
  }

}
