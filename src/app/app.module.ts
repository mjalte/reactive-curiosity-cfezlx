import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RoverComponent } from './rover/rover.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'rover/:roverId',
    component: RoverComponent,
  }
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(routes), 
    HttpClientModule
  ],
  declarations: [ AppComponent, HomeComponent, RoverComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
