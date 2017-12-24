import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrastoPage } from '../crasto/crasto';
import { SantiagoPage } from '../santiago/santiago';
import { RestaurantePage } from '../restaurante/restaurante';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mapPage = MapPage;
  crastoPage = CrastoPage;
  santiagoPage = SantiagoPage;
  restaurantePage = RestaurantePage;

  constructor(public navCtrl: NavController ) {
  }

}
