import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  slideOpt = {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    loop: false
  };
  // event = {
  //   title: '',
  //   desc: '',
  //   startTime: '',
  //   endTime: '',
  //   allDay: false
  // };
  // eventSource = [];
  // calendar = {
  //   mode: 'month',
  //   currentDate: new Date(),
  // };
  // onEventSelected() { }
  // onTimeSelected() { }
  // onViewTitleChanged() { }
  constructor() { }

  ngOnInit() {
  }
}
