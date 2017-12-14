import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './about/post';


@Injectable()
export class DataService {

  //post: Post[];

  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1');
    
    /*
    .subscribe(data => {
         //this.post = data;
        return data;
     });
   */
  }

}
