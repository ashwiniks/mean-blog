import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get("http://localhost:3000/api/posts");

  }

  addPost(title:string,content:string){
  
   return this.http.post("http://localhost:3000/api/posts",{title:title,content:content});
  }
}
