import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule ],
  declarations: [ AppComponent, routedComponents ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
