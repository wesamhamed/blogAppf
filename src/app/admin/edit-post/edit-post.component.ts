import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  postForm = new FormGroup({
    id : new FormControl(''),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    author : new FormControl(''),
    categoryId: new FormControl('', Validators.required),
  });
  constructor(private activatedRoute : ActivatedRoute ,
    private postsService : PostsService , private router : Router ) {
    let id = this.activatedRoute.snapshot.params.id;
    this.postsService.getPost(id).subscribe((data : any)=>{
        // this.postForm.controls.title.setValue(data.title);
        // this.postForm.controls.body.setValue(data.body);
        this.postForm.setValue(data);
    });
   }

  ngOnInit(): void {
  }

  save(){
    this.postsService.editPost(this.postForm.value).subscribe(()=>{
        this.router.navigateByUrl('/admin/posts');
    });
  }

}
