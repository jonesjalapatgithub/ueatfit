import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {State} from './state';

@Injectable()
export class StateService {

    constructor(
        private http: Http) {}

    private statesUrl = 'http://127.0.0.1:8080/stateservice/v1/states';  // URL to web api
    
    getStates(): Promise<State[]>{

        return this.http.get(this.statesUrl)
            .toPromise()
            .then(response => response.json() as State[])
            .catch(this.handleError);
    }

    getState(id: number): Promise<State> {
    return this.getStates()
             .then(states => states.find(state => state.id === id));
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }

}