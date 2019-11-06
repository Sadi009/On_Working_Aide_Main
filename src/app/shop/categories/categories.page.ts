import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  cateSlide = {
    initialSlide: 0,
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 40,
    loop: false
  }
  cateDetails: string = "cloth";
  isAndroid: boolean = false; 
  constructor(platform: Platform) { 
    this.isAndroid = platform.is('android');
  }

  ngOnInit() {
  }

  ionViewDidLoad() {

  }
}
