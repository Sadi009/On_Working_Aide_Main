import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  slideOpts = {
    effect: 'coverflow  ',
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true
  }
  constructor() { }

  ngOnInit() {
  }

}
