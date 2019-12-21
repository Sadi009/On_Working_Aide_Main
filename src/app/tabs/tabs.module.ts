import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
import { MyAccountPageModule } from '../my-account/my-account.module';
import { MyProfilePageModule } from '../my-profile/my-profile.module';
import { TabsPageRoutingModule } from './tabs.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageModule,
    MyAccountPageModule,
    MyProfilePageModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
