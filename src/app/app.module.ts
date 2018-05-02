import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RandomQuoteMachineComponent } from './random-quote-machine/random-quote-machine.component';

import { HttpModule } from '@angular/http';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteMachineComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
