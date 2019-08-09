import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any = [];
  constructor(private __postService: PostService) { }

  ngOnInit() {

    this.__postService.getPost().subscribe((postData) => {
    this.posts = postData;
    })

  }

  onPostDelete(_id:string)
  {
     alert(_id);
  }

}
