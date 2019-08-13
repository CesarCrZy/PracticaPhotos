import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./pages/posts/posts.component";
import { PhotosComponent } from "./pages/photos/photos.component";
import { TodosComponent } from "./pages/todos/todos.component";
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "photos",
    component: PhotosComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "todos",
    component: TodosComponent
  },
  // si el usuario pone otra cosa, sera redirigido a la pagina de home
  {
    path: "**",
    redirectTo: "/home"
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
