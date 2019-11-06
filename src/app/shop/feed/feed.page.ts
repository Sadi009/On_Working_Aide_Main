import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
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
  cateSlide = {
    initialSlide: 0,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 10,
    loop: false
  };
  constructor() { }

  ngOnInit() {
  }

}
