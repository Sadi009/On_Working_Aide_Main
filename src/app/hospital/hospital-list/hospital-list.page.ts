import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HospitalService } from 'src/app/service/hospital.service';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.page.html',
  styleUrls: ['./hospital-list.page.scss'],
})
export class HospitalListPage implements OnInit {
	hospitalList = [];

	constructor(private popoverController: PopoverController, public hospitalService: HospitalService) { }
	  
  	async presentPopover(ev: any) {
    	const popover = await this.popoverController.create({
			component: HospitalListPopUpPage,
			event: ev,
			translucent: true
		});
    	return await popover.present();
	}
	  
	ngOnInit() {
		console.log("Data Loading...");
		this.hospitalService.getAllHospital().subscribe(hospitals => {
			hospitals.forEach(element => {
				console.log(element.data());
				this.hospitalList.push(element.data());
			});
		});
	}
}

@Component({
  selector: 'pop-up',
  template: `
    <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      <ion-card-title>Card Title</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile,
      and climb a mountain or spend a week in the woods. Wash your spirit clean.
    </ion-card-content>
  </ion-card>`,
  styleUrls: ['./hospital-list.page.scss'],
})
export class HospitalListPopUpPage implements OnInit {
  	constructor() { }
  	ngOnInit() {
  	}
}
