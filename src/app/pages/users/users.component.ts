import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  @Input() usersRemote;
  usersRemoto: any;

  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.usersRemoto = this.dataservice.getUsers();
  }
}
