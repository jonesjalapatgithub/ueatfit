import { NgModule }      from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {StateDetailComponent} from './state-detail.component';
import {StatesComponent } from './states.component';
import {DashboardComponent} from './dashboard.component';



const routes: Routes =[
        {
    path: 'states',
    component: StatesComponent
        },
        {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},

        {
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'detail/:id',
  component: StateDetailComponent
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}    