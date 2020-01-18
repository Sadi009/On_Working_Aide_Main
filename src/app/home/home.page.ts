import { Component } from '@angular/core';
import { ScrollDetail } from '@ionic/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  slider: any;
  latestProducts = [];
  trendingProducts = [];
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
  constructor(private product: ProductService) {
    this.slider = {
      isBeginningSlide: true,
      isEndSlide: false
    };

    this.getLatest();
  }
  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 225;
    }
  }

  getLatest() {
    this.product.getLatestProducts().subscribe(prod => {
      prod.forEach(a => {
        this.latestProducts.push(a.data());
      });
    });
  }

  getTrending() {
    this.product.getTrendingProducts().subscribe(prod => {
      prod.forEach(a => {
        console.log(a.data());
        this.trendingProducts.push(a.data());
      });
    });
  }
}
