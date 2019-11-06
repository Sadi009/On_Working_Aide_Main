import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  details: string = 'shipping';
  isAndroid: boolean = false;
  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ngOnInit() {
  }

  ionViewDidLoad() {

  }
}
