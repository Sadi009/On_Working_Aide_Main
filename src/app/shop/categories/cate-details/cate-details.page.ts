import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cate-details',
  templateUrl: './cate-details.page.html',
  styleUrls: ['./cate-details.page.scss'],
})
export class CateDetailsPage implements OnInit {
  // @Output()
  // change: EventEmitter<string> = new EventEmitter<string>();
  public isMenuOpen: boolean = false;
  clickCounter = 0;
  cateSlide = {
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true
  }
  constructor() { }

  ngOnInit() {
  }

  countPlus() {
    this.clickCounter += 1;
  }
  countMinus() {
    // this.clickCounter -= 1;
    if (this.clickCounter == 0) {
      this.clickCounter -= 0;
    } else {
      this.clickCounter -= 1;
    }
  }
  public toggleAccordion(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
