import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the CanteensMealsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CanteensMealsProvider {

  constructor(public http: Http) {

  }
  getCampus(): Promise<any> {
    let url: string = 'http://services.web.ua.pt/sas/ementas?date=week&format=json&place=santiago';
    //for debugging purposes
    //let url: string = '/assets/data/ementa.json';
    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  //'Borrowed' from //https://angular.io/docs/ts/latest/guide/server-communication.html
  private extractData(res: Response) {
    //Convert the response to JSON format
    let body = res.json();
    //Return the data (or nothing)
    return body || {};
  }

  //'Borrowed' from //https://angular.io/docs/ts/latest/guide/server-communication.html
  private handleError(res: Response | any) {
    console.error('Entering handleError');
    console.dir(res);
    return Promise.reject(res.message || res);
  }

  getRest() {
    let url: string = 'http://services.web.ua.pt/sas/ementas?date=week&format=json&place=rest';
    //for debug purposes
    //let url: string = '/assets/data/ementa.json';
    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
}
