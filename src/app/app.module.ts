 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { AppComponent } from './app.component';
 import { NotificationsModule } from 'angular-notice'
 
 @NgModule({
 	declarations: [
 	AppComponent
 	],
 	imports: [
 	BrowserModule,
 	NotificationsModule
 	],
 	providers: [],
 	bootstrap: [AppComponent]
 })
 export class AppModule { }