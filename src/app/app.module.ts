import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {StateDetailComponent} from './state-detail.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
     ],
  declarations: [ 
    AppComponent,
    StateDetailComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
