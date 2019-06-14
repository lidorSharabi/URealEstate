import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../../services/web-api.service';
import { CreateUserRequest } from '../../models/createUserRequest.model';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.css']
})
export class NavigateBarComponent implements OnInit {

  constructor(private webApiService: WebApiService) { }

  ngOnInit() {
  }

  callWebApi() {
    var user = new CreateUserRequest();
    user.email = 'lidor206@gmail.com';
    user.name = 'lidor';
    user.price = 1500000;
    user.rooms = 4;
    user.typeId = 1;
    this.webApiService.createNewUser(user).subscribe((data: boolean) =>
        console.log("createUser", data)
    );
    this.webApiService.check().subscribe((data: boolean) =>
      console.log("data", data)
    );
  }
}