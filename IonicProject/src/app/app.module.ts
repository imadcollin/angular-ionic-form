import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//Import required Objects from Class and files  
import { ControlMessagesComponent } from '../pages/home/home.messageController';
import { FormValidation } from '../pages/home/home.validation';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
        ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    FormValidation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
