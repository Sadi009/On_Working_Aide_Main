import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public isMenuOpen: boolean = false;
  clickCounter = 0;
  cateSlide = {
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    pagination: {
      clickable: true
    }
  };

  constructor() { }

  ngOnInit() {
  }
  public toggleAccordion(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
