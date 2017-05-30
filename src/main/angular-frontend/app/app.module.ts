import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import './rxjs-extensions';
import {FilterPipe} from './pipes';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    Ng2Bs3ModalModule,
    JsonpModule ],
  declarations: [ AppComponent, routedComponents , FilterPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
