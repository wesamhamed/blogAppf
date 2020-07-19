import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {
  tagForm = new FormGroup({
    id : new FormControl(''),
    name: new FormControl('', Validators.required),
  });
  constructor(private activatedRoute : ActivatedRoute ,
     private tagsService : TagsService , private router : Router) {
   let id = this.activatedRoute.snapshot.params.id;
   this.tagsService.getTag(id).subscribe(data=>{
     this.tagForm.setValue(data);
   })
  }

  ngOnInit(): void {
  }

  save(){
    this.tagsService.editTag(this.tagForm.value).subscribe(()=>{
       this.router.navigateByUrl('/admin/tags');
    });
  }

}
