import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TagsService } from 'src/app/services/tags.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css'],
})
export class CreateTagComponent implements OnInit {
  tagForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(private tagsService : TagsService , private router : Router) {}

  ngOnInit(): void {}

  save() {
    this.tagsService.createTag(this.tagForm.value).subscribe(()=>{
      this.router.navigateByUrl('/admin/tags');
    });
  }
}
