import { Component,OnInit } from '@angular/core';
import { State } from './state';
import {StateService} from './state.service';

@Component({
  selector: 'my-states',
  template: `

  <h2>The List of State based Diet Plans</h2>
  <ul class="heroes">
      <li *ngFor="let state of states"
        [class.selected]="state === selectedState"
        (click)="onSelect(state)">
        <span class="badge">{{state.id}}</span> {{state.name}}
      </li>
    </ul>
 <state-detail [state]="selectedState"></state-detail>
  
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class StatesComponent implements OnInit { 
  name = 'Angular'; 
  states: State[];
  selectedState: State;
  
  constructor(private stateService: StateService){}
  
  getStates(): void {
    this.stateService.getStates().then(states => this.states = states);
  }

  ngOnInit(): void {
    this.getStates();
  }
  
  onSelect(state: State): void {
    this.selectedState = state;
  }

  

  }