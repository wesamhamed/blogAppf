import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
  });

  constructor(private postsService : PostsService , private router : Router) {}

  ngOnInit(): void {}

  save(){
    this.postsService.createPost(this.postForm.value).subscribe((data)=>{
      this.router.navigate(['/admin/posts']);
    })
  }
}
