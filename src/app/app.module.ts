import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {StateDetailComponent} from './state-detail.component';
import { AppComponent }  from './app.component';
import {StatesComponent } from './states.component';
import { StateService }         from './state.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,

     ],
  declarations: [ 
    AppComponent,
    StatesComponent,
    StateDetailComponent
     ],
  bootstrap:    [ AppComponent ],
  providers: [StateService]
})
export class AppModule { }
