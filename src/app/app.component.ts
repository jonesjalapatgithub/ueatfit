import {Component} from '@angular/core';

@Component({
selector: 'introduction',
styleUrls: ['./app.component.css'],
template: `<h1>
  Health is very important to our life which we seldom ignore.
  This should not be the case
  I would like to present here certain dietry items that you should follow. 
  </h1>
  <nav>
  <a routerLink="/dashboard">Dashboard</a>
  <a routerLink="/states">STATES</a>
  </nav>
   <router-outlet></router-outlet>
  `,
})
export class AppComponent{

}