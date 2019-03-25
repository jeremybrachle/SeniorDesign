import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { get } from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class WpDBService {
  constructor(private http: HttpClient) {}
  private pmc = "https://platinummotorcars.com/";

// UNCOMMENT LATER{
  getPosts() { 

    // categoryId:number, page:number = 1

    // if we want to query posts by category

    // let category_url = categoryId? ("&categories=" + categoryId): "";
  
    return this.http
    .get(`${this.pmc}/wp-json/wp/v2/posts?_embed`)
    .pipe(
      map((posts: Array<any>) => posts.map(this.setEmbeddedFeaturedImage))
    );
  }
    
      //   Config.WORDPRESS_REST_API_URL
      //   + 'posts?page=' + page
      //   + category_url)
      // .map(res => res.json());


  private setEmbeddedFeaturedImage(p){
    return Object.assign({}, p, {
      featured_image: get(p, "_embedded['wp:featuredmedia'][0].source_url")
    })
  }

  fetchPostsByCategory(category_id: string) {
    return this.http
      .get(
        `${this.pmc}/wp-json/wp/v2/posts?_embed&categories=${category_id}`
      )
      .pipe(
        map((posts: Array<any>) => posts.map(this.setEmbeddedFeaturedImage))
      );
  }
}


// <?php
// //Variables for connecting to your database.
// //These variable values come from your hosting account.
// $hostname = "pla1321704520100.db.11336916.hostedresource.com";
// $username = "pla1321704520100";
// $dbname = "pla1321704520100";

// //These variable values need to be changed by you before deploying
// $password = "your password";
// $usertable = "your_tablename";
// $yourfield = "your_field";

// //Connecting to your database
// mysql_connect($hostname, $username, $password) OR DIE ("Unable to
// connect to database! Please try again later.");
// mysql_select_db($dbname);

// //Fetching from your database table.
// $query = "SELECT * FROM $usertable";
// $result = mysql_query($query);

// if ($result) {
//     while($row = mysql_fetch_array($result)) {
//         $name = $row["$yourfield"];
//         echo "Name $name<br>";
//     }
// }
// ?>
            