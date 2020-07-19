import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {
    // this.heders.set('Country' , 'Palestine');
  }

  getPosts() {
    return this.http.get('http://localhost:3000/posts', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }
  getPost(id) {
    return this.http.get(`http://localhost:3000/posts/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    });
  }
  createPost(post) {
    return this.http.post('http://localhost:3000/posts', post);
  }
  editPost(post) {
    return this.http.put(`http://localhost:3000/posts/${post.id}`, post);
  }
}
