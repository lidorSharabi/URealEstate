import { Component, OnInit, Input, OnChanges, SimpleChange,EventEmitter } from '@angular/core';
import { UserDetails } from 'src/app/models/user-datails.model';
import { Store } from '@ngrx/store';
import * as fromURealEstate from "../../store/reducers/URealEstate.reducer"; 
import { Observable } from 'rxjs';
import * as fromActions from "../../store/actions/URealEstate.actions";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit, OnChanges {
  // @Input() isOpen: boolean; 
  userDetailsOpen: boolean;
  roomNum = [1,2,3,4,5,6,7];
  //TODO: get this from server:
  locations = ["ראש העין", "תל אביב", "רמת השרון", "רעננה", "הרצליה", "ראשון לציון", "פתח תקווה", "מודיעין", "הוד השרון"];
  model = new UserDetails();
  public DialogOpen = false;
  // public FormOpen = false;
  // formClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private store: Store<fromURealEstate.State>) { }

  ngOnInit() {
    this.store.select(fromURealEstate.getIsUserDialogOpen).subscribe(x => this.userDetailsOpen = x);
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }){
    // let change: SimpleChange = changes['isOpen']; 
    // console.log("in OnChanges");
    // this.FormOpen = change.currentValue;
    // this.openForm();
  }

  onSubmit() {
     this.getCheckboxesValues();
    console.log("model: ", this.model);
    this.closeForm();
    this.openDialog();    
    }

    getCheckboxesValues(){
      var id;
      for (var i = 0; i < 6; i++){
        id = "checkbox" + i.toString();        
        var isChecked = (<HTMLInputElement>document.getElementById(id)).checked;
        if(isChecked){
          if(this.model.types == undefined){
            this.model.types = [];
          }
          this.model.types.push(i);
        }
      } 
    }

    public closeForm() {
      // this.FormOpen = false;
      this.store.dispatch(new fromActions.UserDialogOpen(false));
      // this.formClosed.emit();
    }

    public openForm() {
      // this.FormOpen = true;
      this.store.dispatch(new fromActions.UserDialogOpen(true));
    }

    public closeDialog() {
      this.DialogOpen = false;
      this.closeForm();
    }

    public openDialog() {
      this.DialogOpen = true;
    }
}
