import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import './rxjs-extensions';
import {FilterPipe} from './pipes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule ],
  declarations: [ AppComponent, routedComponents , FilterPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
