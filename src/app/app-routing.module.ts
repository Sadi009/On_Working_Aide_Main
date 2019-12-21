import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   loadChildren: './home/home.module#HomePageModule'
  // },
  { path: 'log-in', loadChildren: './auth/log-in/log-in.module#LogInPageModule' },
  { path: 'sign-up', loadChildren: './auth/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'decide', loadChildren: './auth/decide/decide.module#DecidePageModule' },
  { path: 'profile-edit', loadChildren: './my-profile/profile-edit/profile-edit.module#ProfileEditPageModule' },
  {
    path: 'shop',
    children: [
      {
        path: '',
        loadChildren: './shop/feed/feed.module#FeedPageModule'
      },
      {
        path: 'categories',
        loadChildren: './shop/categories/categories.module#CategoriesPageModule'
      },
      {
        path: 'cate-details',
        loadChildren: './shop/categories/cate-details/cate-details.module#CateDetailsPageModule'
      },
      {
        path: 'cart',
        loadChildren: './shop/categories/cart/cart.module#CartPageModule'
      },
      {
        path: 'checkout',
        loadChildren: './shop/categories/cart/checkout/checkout.module#CheckoutPageModule'
      },
      {
        path: 'my-orders',
        loadChildren: './shop/my-orders/my-orders.module#MyOrdersPageModule'
      }
    ]
  },

  {
    path: 'ambulance',
    children: [
      {
        path: '',
        loadChildren: './ambulance/ambulance-list/ambulance-list.module#AmbulanceListPageModule'
      },
      {
        path: 'details',
        loadChildren: './ambulance/ambulance-list/details/details.module#DetailsPageModule'
      },
    ]
  },

  // For Doctor Module //
  {
    path: 'global-user',
    children: [
      {
        path: '',
        loadChildren: './doctor/global-user/global-user.module#GlobalUserPageModule'
      },
      {
        path: 'categories',
        loadChildren: './doctor/global-user/categories/categories.module#CategoriesPageModule'
      },
      {
        path: 'doctor-profile',
        loadChildren: './doctor/global-user/doctor-profile/doctor-profile.module#DoctorProfilePageModule'
      },
      {
        path: 'booking',
        loadChildren: './doctor/global-user/doctor-profile/booking/booking.module#BookingPageModule'
      },
      {
        path: 'personal-info',
        loadChildren: './doctor/global-user/doctor-profile/personal-info/personal-info.module#PersonalInfoPageModule'
      },
      {
        path: 'address',
        loadChildren: './doctor/global-user/doctor-profile/address/address.module#AddressPageModule'
      },
      {
        path: 'reviewer',
        loadChildren: './doctor/global-user/doctor-profile/reviewer/reviewer.module#ReviewerPageModule'
      },
      {
        path: 'appointments',
        loadChildren: './doctor/global-user/appointments/appointments.module#AppointmentsPageModule'
      },
      {
        path: 'appointment',
        loadChildren: './doctor/global-user/appointments/appointment/appointment.module#AppointmentPageModule'
      }
    ]
  },
  {
    path: 'doctors',
    children: [
      {
        path: '',
        loadChildren: './doctor/doctors/doctors.module#DoctorsPageModule'
      },
      {
        path: 'appointments',
        loadChildren: './doctor/doctors/appointments/appointments.module#AppointmentsPageModule'
      },
      {
        path: 'appointment',
        loadChildren: './doctor/doctors/appointments/appointment/appointment.module#AppointmentPageModule'
      },
      {
        path: 'address',
        loadChildren: './doctor/doctors/address/address.module#AddressPageModule'
      },
      {
        path: 'personal-info',
        loadChildren: './doctor/doctors/personal-info/personal-info.module#PersonalInfoPageModule'
      },
      {
        path: 'reviewer',
        loadChildren: './doctor/doctors/reviewer/reviewer.module#ReviewerPageModule'
      },
      {
        path: 'settings',
        loadChildren: './doctor/doctors/settings/settings.module#SettingsPageModule'
      },
      {
        path: 'profile-setting',
        loadChildren: './doctor/doctors/settings/profile-setting/profile-setting.module#ProfileSettingPageModule'
      },
      {
        path: 'account-setting',
        loadChildren: './doctor/doctors/settings/account-setting/account-setting.module#AccountSettingPageModule'
      },
    ]
  },
  // For Hospital Module //
  {
    path: 'hospital',
    children: [
      {
        path: 'hospital-list',
        loadChildren: './hospital/hospital-list/hospital-list.module#HospitalListPageModule'
      },
      {
        path: 'details',
        loadChildren: './hospital/hospital-list/details/details.module#DetailsPageModule'
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
