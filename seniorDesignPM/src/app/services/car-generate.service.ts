import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car-model';


@Injectable()
export class CarGenerateService {

  constructor(
    private http: HttpClient
  ) { }

  // variables
  textData: String;
  allCars = new Array;

  // pull car data from database
  getCarsFromDB() {
    // get text from file that holds car data scraped from site
    this.http.get('assets/files/out.txt', {responseType: 'text'}
    ).subscribe(
      data => {
        this.textData = data;
      }
    );
  }

  // parse the car data
  parseCarData() {
    // make rows for each line that holds car data
    let allRows: any;
    allRows = this.textData.split('\n');

    // iterate over all rows of cars
    for (let i = 0; i < allRows.length - 1; i ++) {
      // split by pipe | to get car objects
      let eachCarAttr = allRows[i].split('|');

      // make car objects and store them into array
      let carOpt = new Car(
          eachCarAttr[0],
          eachCarAttr[4],
          eachCarAttr[1],
          eachCarAttr[2],
          eachCarAttr[3],
          eachCarAttr[5],
          null,
          null,
          null,
          null
        );
      // push to array
      this.allCars.push(carOpt);
    }
  }

  // return the array of cars
  getCarArray() {
    return this.allCars;
  }

}
