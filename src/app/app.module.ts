import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './admin/posts/posts.component';
import { TagsComponent } from './admin/tags/tags.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { CreateTagComponent } from './admin/create-tag/create-tag.component';
import { CreatePostComponent } from './admin/create-post/create-post.component';
import { CreateCategoryComponent } from './admin/create-category/create-category.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { EditTagComponent } from './admin/edit-tag/edit-tag.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { ShowPostComponent } from './admin/show-post/show-post.component';
import { HttpClientModule } from "@angular/common/http";
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { UsersComponent } from './admin/users/users.component';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { TagsService } from './services/tags.service';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PostComponent,
    PostsComponent,
    TagsComponent,
    CategoriesComponent,
    CommentsComponent,
    CreateTagComponent,
    CreatePostComponent,
    CreateCategoryComponent,
    EditPostComponent,
    EditTagComponent,
    EditCategoryComponent,
    ShowPostComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [PostsService , UsersService , TagsService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
