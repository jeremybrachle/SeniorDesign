import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpDBService} from '../../services/wp-db.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage { //implements OnInit

  constructor(private route: ActivatedRoute, private router: Router, private WpService: WpDBService){}
  
  posts$: Observable<any>;

  loadPost(post: any){
    this.router.navigate(["/posts", post.id]);
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
