import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BocinaPage } from '../pages/bocina/bocina';
import { LamparaPage } from '../pages/lampara/lampara';
import { SmartphonePage } from '../pages/smartphone/smartphone';
import { TvPage } from '../pages/tv/tv';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BocinaPage,
    LamparaPage,
    SmartphonePage,
    TvPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BocinaPage,
    LamparaPage,
    SmartphonePage,
    TvPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
