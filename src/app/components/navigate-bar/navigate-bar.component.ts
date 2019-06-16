import { Store, select } from '@ngrx/store';
import * as fromURealEstate from "../../store/reducers/URealEstate.reducer"; 
import * as fromActions from "../../store/actions/URealEstate.actions";
import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../../services/web-api.service';
import { CreateUserRequest } from '../../models/createUserRequest.model';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.css']
})
export class NavigateBarComponent implements OnInit {
  // userDetailsOpen = false;
  userDetailsOpen: boolean;
  // @Output() userClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(private store: Store<fromURealEstate.State>) { }

  ngOnInit() {
    // this.store.dispatch(new fromActions.UserDialogOpen(true));
    this.store.select(fromURealEstate.getIsUserDialogOpen).subscribe(x => {console.log("x: ", x); this.userDetailsOpen = x});
  }

  userDetailsClicked(){
    this.store.dispatch(new fromActions.UserDialogOpen(true));
    // alert("here");
    // this.userDetailsOpen = true;
    
    // this.userClicked.emit(0);
  }

  // formClosed(){
  //   // this.userDetailsOpen = false;
  //   this.store.dispatch(new fromActions.UserDialogOpen(false));
  // }


  // callWebApi() {
  //   var user = new CreateUserRequest();
  //   user.email = 'lidor206@gmail.com';
  //   user.name = 'lidor';
  //   user.price = 1500000;
  //   user.rooms = 4;
  //   user.typeId = 1;
  //   this.webApiService.createNewUser(user).subscribe((data: boolean) =>
  //       console.log("createUser", data)
  //   );
  //   this.webApiService.check().subscribe((data: boolean) =>
  //     console.log("data", data)
  //   );
  // }
}
