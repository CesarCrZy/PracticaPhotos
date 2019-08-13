import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(
      tap(posts => {
        console.log(posts);
      })
    );
  }

  getPhoto() {
    return this.http.get("https://jsonplaceholder.typicode.com/photos").pipe(
      tap(photos => {
        console.log(photos);
      })
    );
  }

  getTodos() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos").pipe(
      tap(todos => {
        console.log(todos);
      })
    );
  }

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      tap(users => {
        console.log(users);
      })
    );
  }
}
