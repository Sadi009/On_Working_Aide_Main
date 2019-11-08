import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-ambulance-list',
  templateUrl: './ambulance-list.page.html',
  styleUrls: ['./ambulance-list.page.scss'],
})
export class AmbulanceListPage implements OnInit {
  slider: any;
  promoSlider = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    loop: false
  };
  ambulanceList: string = "premium";
  isAndroid: boolean = false;
  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ngOnInit() {
  }

}
