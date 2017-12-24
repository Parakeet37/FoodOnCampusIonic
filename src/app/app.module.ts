import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CanteensMealsProvider } from '../providers/canteens-meals/canteens-meals';
import { CrastoPage } from '../pages/crasto/crasto';
import { SantiagoPage } from '../pages/santiago/santiago';
import { RestaurantePage } from '../pages/restaurante/restaurante';
import { MapPage } from '../pages/map/map';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CrastoPage,
    SantiagoPage,
    RestaurantePage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrastoPage,
    SantiagoPage,
    RestaurantePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CanteensMealsProvider
  ]
})
export class AppModule {}
