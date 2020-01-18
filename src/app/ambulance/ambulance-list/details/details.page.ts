import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public isMenuOpen: boolean = false;
  details;
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


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.details = params;
    });
  }

  public toggleAccordion(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
