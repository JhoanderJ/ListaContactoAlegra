import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { AddPage } from '../pages/add/add';
import { HomePage } from '../pages/home/home';
import { ContactoPage } from '../pages/contacto/contacto';
import { ServicioApiAlegraService } from './API/servicios.services';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollDirective } from '../directives/infinite-scroll.directive';



@NgModule({
  declarations: [
    MyApp,
    HomePage,ContactoPage,AddPage,
    InfiniteScrollDirective,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,ContactoPage,AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServicioApiAlegraService,
    HttpClientModule,
    HttpModule,
    
    
    
    {provide:  ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
