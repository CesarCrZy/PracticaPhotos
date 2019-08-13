import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  @Input() todosRemote;
  todosRemoto: any;

  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.todosRemoto = this.dataservice.getTodos();
  }
}
