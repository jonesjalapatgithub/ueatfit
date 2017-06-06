import {Component, Input } from '@angular/core';
import { State } from './state';

@Component({
    selector: 'state-detail',
    template: `
           <div *ngIf="state">
      <h2>{{state.name}} details!</h2>
      <div><label>id: </label>{{state.id}}</div>

      <div>
        <label>name: </label>{{state.name}}
      </div>
    </div>
    `
})
export class StateDetailComponent{
    @Input() state: State;
}
