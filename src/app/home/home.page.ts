import { Component } from '@angular/core';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  slider: any;
  flashSlide = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    loop: false
  };
  trendingSlide = {
    initialSlide: 0,
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 10,
    loop: false
  };

  showToolbar = false;
  constructor() {
    this.slider = {
      isBeginningSlide: true,
      isEndSlide: false
    };
  }
  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 225;
    }
  }
}
