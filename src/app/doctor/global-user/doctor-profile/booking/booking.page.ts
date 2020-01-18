import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  doctor_id;
  name;
  selectedDate;
  slideOpt = {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    loop: false
  };
  
  constructor(private route: ActivatedRoute, public doctorService: DoctorService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.doctor_id = params.doctor_id;
    });
  }

  onSelect(event) {
    console.log(event);
    this.selectedDate = event;
  }

  book() {
    let data = {
      patient_name: this.name,
      appointment_date: this.selectedDate,
      status: "request",
      chamber: this.doctor_id,
      contact: "",
      user: ""
    }

    this.doctorService.addAppointment(data);
    this.name = "";
  }
}
