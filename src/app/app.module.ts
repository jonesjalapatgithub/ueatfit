import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {StateDetailComponent} from './state-detail.component';
import { AppComponent }  from './app.component';
import {StatesComponent } from './states.component';
import { StateService }         from './state.service';
import {DashboardComponent} from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule }    from '@angular/http';
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpModule
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
