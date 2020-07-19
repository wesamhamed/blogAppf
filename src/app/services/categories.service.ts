import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  URL = "http://localhost:3000/categories/";
  constructor(private http : HttpClient) {

  }

  getCategories(){
    return this.http.get(this.URL);
  }

  getCategory(id){
    return this.http.get(this.URL + id);
  }

  createCategory(category){
    return this.http.post(this.URL , category);
  }

  editCategory(category){
    return this.http.put(this.URL+ category.id , category);
  }

  deleteCategory(id){
    return this.http.delete(this.URL + id);
  }

}
