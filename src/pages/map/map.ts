import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';
import L from "leaflet";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  propertyList = [];
  center: L.PointTuple;
  map;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.map = L.map('map').setView( [40.628406, -8.656562], 16);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      accessToken: 'pk.eyJ1IjoicGFyYWtlZXQzNyIsImEiOiJjamJrbzd5N24xcmxoMzNvZmM3NjBuamkwIn0.sWSzm2DtFdKBHOd-uWK26w'
    }).addTo(this.map);
    L.marker([40.624536, -8.656994]).addTo(this.map)
      .bindPopup("Crasto")
      .openPopup();
    L.marker([40.630596, -8.659026] ).addTo(this.map)
    .bindPopup("Santiago")
    .openPopup();
    L.marker([40.631225, -8.655419]).addTo(this.map)
    .bindPopup("Snack-Bar")
    .openPopup();
  } 
}