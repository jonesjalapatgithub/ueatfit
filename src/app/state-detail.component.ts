import {Component, Input,OnInit} from '@angular/core';
import { State } from './state';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { StateService } from './state.service';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'state-detail',
    templateUrl: './state-detail.component.html',
    })
export class StateDetailComponent implements OnInit {
    
    @Input() state: State;

    constructor(
  private stateService: StateService,
  private route: ActivatedRoute,
  private location: Location
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.stateService.getState(+params['id']))
    .subscribe(state => this.state = state);
}

goBack(): void {
  this.location.back();
}


}
