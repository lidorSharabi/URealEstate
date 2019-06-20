import { Store, select } from '@ngrx/store';
import * as fromActions from "../../store/actions/URealEstate.actions";
import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../store';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.css']
})
export class NavigateBarComponent implements OnInit {
  userDetailsOpen: boolean;
  public items: any[] = [ {
    text: 'כניסה',
    items: [{ text: 'כניסה אישית' }, { text: 'צור חשבון' }, { text: 'כניסת מנהל' }]
}];
// public items: any[] = [ {
//   text: 'שלום, הודיה',
//   items: [{ text: 'לאזור האישי'}, { text: 'התנתק' }]
// }];

  constructor(private store: Store<fromStore.SystemState>) { }

  ngOnInit() {
    this.store.select(fromStore.getIsUserDialogOpen).subscribe(x => this.userDetailsOpen = x);
  }

  userDetailsClicked(){
    this.store.dispatch(new fromActions.UserDialogChange(true));
  }


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
