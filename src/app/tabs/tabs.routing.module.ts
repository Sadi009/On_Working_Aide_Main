import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '(home:home)',
                pathMatch: 'full',
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'my-account',
                children: [
                    {
                        path: '',
                        loadChildren: '../my-account/my-account.module#MyAccountPageModule'
                    }
                ]
            },
            {
                path: 'my-profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../my-profile/my-profile.module#MyProfilePageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
