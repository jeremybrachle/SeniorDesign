import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
// import { get } from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class WpDBService {
// UNCOMMENT LATER {
  // constructor(private http: HttpClient) {}
  // private pmc = "https://platinummotorcars.com/";
// }

// UNCOMMENT LATER{
  // getPosts() { 
// }
    //categoryId:number, page:number = 1

    //if we want to query posts by category

    // let category_url = categoryId? ("&categories=" + categoryId): "";
  
    // return this.http
    // .get(`${this.pmc}/wp-json/wp/v2/posts?_embed`)
    // .pipe(
    //   map((posts: Array<any>) => posts.map(this.setEmbeddedFeaturedImage))
    // );
    
      //   Config.WORDPRESS_REST_API_URL
      //   + 'posts?page=' + page
      //   + category_url)
      // .map(res => res.json());
  // }

  // private setEmbeddedFeaturedImage(p){
    // console.log("eh");
    // return Object.assign({}, p, {
    //   featured_image: get(p, "_embedded['wp:featuredmedia'][0].source_url")
    // })
  // }

  // fetchPostsByCategory(category_id: string) {
  //   return this.http
  //     .get(
  //       `${this.pmc}/wp-json/wp/v2/posts?_embed&categories=${category_id}`
  //     )
  //     .pipe(
  //       map((posts: Array<any>) => posts.map(this.setEmbeddedFeaturedImage))
  //     );
  // }
}
