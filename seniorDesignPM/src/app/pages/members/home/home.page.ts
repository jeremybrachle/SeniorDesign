import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpDBService} from '../../../services/wp-db.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CarGenerateService } from '../../../services/car-generate.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private WpService: WpDBService,
    private carGenerateService: CarGenerateService
    ) {}
  
  // all cars, will be used to get random set of images
  allCars = new Array;
  carImg1: String;
  carImg2: String;
  carImg3: String;


  // posts$: Observable<any>;

  // loadPost(post: any){
  //   this.router.navigate(["/posts", post.id]);
  // }

  ngOnInit() {
    // get all cars from the database to generate a random set of 3 images
    this.allCars = this.carGenerateService.getCarArray();

    // generate 3 distinct random numbers within the length of all the cars
    let randomNum1 = Math.floor(Math.random() * this.allCars.length - 1) + 1;
    let randomNum2 = Math.floor(Math.random() * this.allCars.length - 1) + 1;
    while (randomNum2 === randomNum1) {
      randomNum2 = Math.floor(Math.random() * this.allCars.length - 1) + 1;
    }
    let randomNum3 = Math.floor(Math.random() * this.allCars.length - 1) + 1;
    while (randomNum3 === randomNum1 || randomNum3 === randomNum2) {
      randomNum3 = Math.floor(Math.random() * this.allCars.length - 1) + 1;
    }

    // set the images to the randomized urls
    this.carImg1 = this.allCars[randomNum1]['defaultImg'];
    this.carImg2 = this.allCars[randomNum2]['defaultImg'];
    this.carImg3 = this.allCars[randomNum3]['defaultImg'];
  }

  // ngOnInit(){
  //   this.posts$ = this.route.paramMap.pipe(
  //     switchMap(
  //       (params: ParamMap) => 
  //         params.get("category")
  //           ? this.WpService.fetchPostsByCategory(params.get("category"))
  //           : this.WpService.getPosts())
  //   );
  // }

  // ngOnInit() {
  //   this.posts$ = this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) => this.WpService.getPosts())
  //   );
  // } 

  // exampleFunction(){
  //   this.WpService.getRecentPosts(this.categoryId).subscribe(data => {
  //   for(let post of data){
  //     //do something with your posts
  //   }
  // });
  // }
  

}
