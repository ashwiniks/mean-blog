import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../post.service'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private __postService: PostService) { }

  ngOnInit() {
  }

  onAddPost(postData:NgForm)
  {
   console.log(postData.value.title);
   console.log(postData.value.content);
   this.__postService.addPost(postData.value.title,postData.value.content).subscribe((result)=>{
     console.log(result);
   })

  }

}
