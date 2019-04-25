import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../models/car-model';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CarGenerateService {

  constructor(
    private http: HttpClient
  ) { }

  // variables
  textData: String;
  allCars = new Array;
  connected: Boolean = false;

  // pull car data from database
  getCarsFromDB() {
    // get text from file that holds car data scraped from site
    this.http.get('assets/files/out.txt', {responseType: 'text'}
    ).subscribe(
      data => {
        this.textData = data;
      }
    );


    // call API to get the car data as JSON
    // but if the json is not attainable for somereason, just read the text file

    
    this.http.get('http://localhost:5000/cars', {responseType: 'json'}
    ).subscribe(
      data => {
        // this.connected = true;
        // this.parseCarDataFromJson();
        // console.log('Length of Array: ' + Object.keys(data).length);
        console.log(data);
      }, error => {
        console.log(error);
        // this.parseCarDataFromFile();
      }
    );
  
  }

  async getRequest() {
    await this.http.get('http://localhost:5000/cars', {responseType: 'json'}
    ).toPromise().then(
      data => {
        // if a connection is made, parse the json response
        this.connected = true;
        console.log('connection established to api');
        console.log('json parse');
        this.parseCarDataFromJson();
        // console.log('Length of Array: ' + Object.keys(data).length);
        // console.log(data);
      }, error => {
        console.log(error);
        // this.parseCarDataFromFile();
      }
    );

    // if no connection is made, parse the textfile
    if (!this.connected) {
      console.log('no connection found to api');
      await this.http.get('assets/files/out.txt', {responseType: 'text'}
      ).toPromise().then(
        data => {
          this.textData = data;
        }
      );
      console.log('file parse');
      this.parseCarDataFromFile();
    }

  }

  // check what parsing to use based on the connect
  parseCarData() {
    // if connected, parse from json, otherwise, from file
    if (this.connected === true) {
      console.log('json');
      this.parseCarDataFromJson();
    }
    else {
      console.log('file');
      this.parseCarDataFromFile();
    }
  }


  // parse the car data from json
  parseCarDataFromJson() {
    console.log('yeet');
  }

  // parse the car data from the file
  parseCarDataFromFile() {
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
