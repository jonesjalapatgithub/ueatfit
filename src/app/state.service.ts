import { Injectable } from '@angular/core';


import {State} from './state';

import {STATES }from './mock-states';

@Injectable()
export class StateService {

    getStates(): Promise<State[]>{
        return Promise.resolve(STATES);
    }
    getState(id: number): Promise<State> {
  return this.getStates()
             .then(states => states.find(state => state.id === id));
}

}