import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  constructor(private categoriesService : CategoriesService , private router : Router) {}

  ngOnInit(): void {}

  save(){
    this.categoriesService.createCategory(this.categoryForm.value).subscribe(()=>{
      this.router.navigateByUrl("/admin/categories");
    })
  }
}
