import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AmbulanceService } from 'src/app/service/ambulance.service';

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
  ambulanceList = [];
  isAndroid: boolean = false;
  constructor(platform: Platform, public ambulanceService: AmbulanceService) {
    this.isAndroid = platform.is('android');
  }

  ngOnInit() {
    this.ambulanceService.getAllAmbulances().subscribe(ambulances => {
      ambulances.forEach(element => {
        console.log(element.data());
        this.ambulanceList.push(element.data());
      });
    });
  }
}
