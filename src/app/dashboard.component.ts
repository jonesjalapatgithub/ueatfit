import { Component,OnInit } from '@angular/core';

import {State} from './state';
import {StateService} from './state.service';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    states: State[];

    constructor(private stateService: StateService){}

    ngOnInit(): void {
    this.stateService.getStates()
      .then(states => this.states = states.slice(1, 6));
  }

 }
