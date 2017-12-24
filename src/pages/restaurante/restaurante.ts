import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CanteensMealsProvider } from '../../providers/canteens-meals/canteens-meals';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-restaurante',
  templateUrl: 'restaurante.html',
})
export class RestaurantePage {

  restauranteMeals = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public meals: CanteensMealsProvider, public storage: Storage) {
  }

  ionViewWillEnter(){    
      this.storage.get('menu').then((val) => {
      try{
        this.meals.getCampus().then(
          data => {
            //Hide the loading indicator
            //Now, populate the array with data from the api
            if (data) {
              //We have data, so lets do something with it
              var menus = data.menus.menu;
              for (var menu of menus){
                var attributes =  (menu)[Object.keys(menu)[0]];
                var items = (menu)[Object.keys(menu)[1]]
                var date = "";
                  var count = 0;
                  for (var p of attributes.date.split(" ")){
                    if (count<4){
                      date += " " + p;
                      count++;
                    } if (count == 4){
                      break;
                    }  
                  }
                if (attributes.disabled != "0") {
                  this.restauranteMeals.push({header: date + ", " + attributes.meal , content: [attributes.disabled]})
                } else {
                  var arr = [];
                  for (var item of items.item){
                    arr.push(item);
                  }
                  this.restauranteMeals.push({header: date + ", " + attributes.meal , content: arr});
                }
              }
              this.storage.set('menu',this.restauranteMeals);
            } else {
              //This really should never happen
              console.error('Error retrieving data: Data object is empty');
            }
          },
          error => {
            //Hide the loading indicator
            console.error('Error retrieving data');
            console.dir(error);
          }
        );
      }catch(e){
        this.restauranteMeals=val;
      }   
    });
  }
}
