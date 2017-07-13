import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {StateDetailComponent} from './state-detail.component';
import { AppComponent }  from './app.component';
import {StatesComponent } from './states.component';
import { StateService }         from './state.service';
import { RouterModule }   from '@angular/router';
import {DashboardComponent} from './dashboard.component';
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
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
},

      ])
    ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    StatesComponent,
    StateDetailComponent
     ],
  bootstrap:    [ AppComponent ],
  providers: [StateService]
})
export class AppModule { }
