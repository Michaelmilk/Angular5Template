import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//dashboard
import { DashboardComponent}  from './components/dashboard/dashboard.component'


import { PageNotFoundComponent }  from './components/trivial/pageNotFound.component';
// ];

let allRoutes: Routes = [];

const dashboardRoutes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

const wildcardRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

allRoutes = allRoutes.concat(dashboardRoutes, wildcardRoutes);

@NgModule({
  imports: [ RouterModule.forRoot(
    allRoutes,
    //his outputs each router event that took place during each navigation lifecycle to the browser console
    //{ enableTracing: true } // <-- debugging purposes only
  ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}