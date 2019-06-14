import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromURealEstate from "../../store/reducers/URealEstate.reducer"; 
import * as fromActions from "../../store/actions/URealEstate.actions";
import { Observable } from 'rxjs';

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

}
