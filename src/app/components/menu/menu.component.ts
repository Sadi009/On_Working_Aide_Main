import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      title: 'My Account',
      url: '/tabs/my-account',
      icon: 'person'
    },
    {
      title: 'My Profile',
      url: '/tabs/my-profile',
      icon: 'person'
    },
  ];
  selectedPath = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
  ngOnInit() { }
}
