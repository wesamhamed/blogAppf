import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  categoryForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
  });
  constructor(private activatedRoute  : ActivatedRoute ,
     private categoriesService : CategoriesService , private router : Router) {
    let id = this.activatedRoute.snapshot.params.id;
    this.categoriesService.getCategory(id).subscribe(data=>{
        this.categoryForm.setValue(data);
    });

  }

  ngOnInit(): void {}

  save(){
    this.categoriesService.editCategory(this.categoryForm.value).subscribe(()=>{
      this.router.navigateByUrl('/admin/categories');
    });
  }
}
