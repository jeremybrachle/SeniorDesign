import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CarGenerateService {

  constructor(
    private http: HttpClient
  ) { }

  // variables
  textData: String;

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
    let allRows: any;
    allRows = this.textData.split('\n');

    // iterate over all rows of cars
    for (let i = 0; i < allRows.length - 1; i ++) {
      // split by pipe | and make car objects
      let eachCarAttr = allRows[i].split('|');
      // get the attributes
      for (let j = 0; j < eachCarAttr.length - 1; j ++) {
        console.log(eachCarAttr[j]);
      }
    }
    
  }

}
