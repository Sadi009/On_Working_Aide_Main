import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HospitalListPage, HospitalListPopUpPage } from './hospital-list.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalListPage
  }
];

@NgModule({
  entryComponents: [HospitalListPopUpPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HospitalListPage, HospitalListPopUpPage]
})
export class HospitalListPageModule { }
