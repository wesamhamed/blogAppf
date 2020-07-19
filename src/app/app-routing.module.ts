import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './admin/posts/posts.component';
import { TagsComponent } from './admin/tags/tags.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { CreatePostComponent } from './admin/create-post/create-post.component';
import { CreateTagComponent } from './admin/create-tag/create-tag.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { EditTagComponent } from './admin/edit-tag/edit-tag.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { ShowPostComponent } from './admin/show-post/show-post.component';
import { UsersComponent } from './admin/users/users.component';
import { CreateCategoryComponent } from './admin/create-category/create-category.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { RedirectGuard } from './guards/redirect.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent , canActivate : [RedirectGuard] },
  { path: 'register', component: RegisterComponent  , canActivate : [RedirectGuard]},
  { path: 'post/:id', component: PostComponent},
  { path: 'admin/posts', component: PostsComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/tags', component: TagsComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/comments', component: CommentsComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/categories', component: CategoriesComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/createPost', component: CreatePostComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/createCategory', component: CreateCategoryComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/createTag', component: CreateTagComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/editPost/:id', component: EditPostComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/editTag/:id', component: EditTagComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/editCategory/:id', component: EditCategoryComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/showPost/:id', component: ShowPostComponent , canActivate : [AuthGuard , AdminGuard]},
  { path: 'admin/users', component: UsersComponent , canActivate : [AuthGuard , AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
