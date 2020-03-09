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

  navigateToInsta(){
    window.open("https://www.instagram.com/orokashi.u.real.estate/", "_blank");
}

navigateToFacebook(){
  window.open("https://www.facebook.com/U-%D7%A9%D7%99%D7%95%D7%95%D7%A7-%D7%A0%D7%9B%D7%A1%D7%99%D7%9D-1831093603845315", "_blank");
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
