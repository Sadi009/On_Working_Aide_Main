import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
  details;
  doctors = {};
  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.details = params;

    });
    this.getDoctor(this.details);
  }
  getDoctor(id) {
    this.appointmentService.getDoctor(id).subscribe(doctors => {
      this.doctors = doctors.data();
    });
  }
  onCancelAppoinment(data) {
    const msg = confirm('Are You Sure?');
      if (msg === true) {
        this.appointmentService.cancelAppointment(data);
      }
    
  }

}
