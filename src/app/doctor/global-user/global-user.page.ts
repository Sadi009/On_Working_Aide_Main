import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-global-user',
  templateUrl: './global-user.page.html',
  styleUrls: ['./global-user.page.scss'],
})
export class GlobalUserPage implements OnInit {
  sliderOpt = {
    initialSlide: 0,
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 10,
    loop: false
  };
  categories = [
    {
      name: 'Psychiatrist',
      color: '#fe60a1'
    },
    {
      name: 'Psychiatrist',
      color: '#8e2de2'
    },
    {
      name: 'Neurologist',
      color: '#045de9'
    },
    {
      name: 'Neurologist',
      color: '#045de9'
    },
    {
      name: 'Neurologist',
      color: '#045de9'
    }
  ];
  constructor(private popoverController: PopoverController) { }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component:
        `<ion-card>
          <ion-card-header>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            <ion-card-title>Card Title</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </ion-card-content>
        </ion-card>`
      ,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {
  }

}
