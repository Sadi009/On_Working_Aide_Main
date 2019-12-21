import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  details = 'upcoming';
  isAndroid = false;
  constructor(private platform: Platform) {
    this.isAndroid = this.platform.is('android');
  }
  ngOnInit() {
  }

}
