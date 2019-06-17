import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models/user-datails.model';
import { Store } from '@ngrx/store';
import * as fromActions from "../../store/actions/URealEstate.actions";
import { WebApiService } from 'src/app/services/web-api.service';
import * as fromStore from '../../store';
import { Asset } from 'src/app/models/asset.model';
 
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  userDetailsOpen: boolean;
  roomNum = [1,2,3,4,5,6,7];
  //TODO: get this from server:
  locations = ["ראש העין", "תל אביב", "רמת השרון", "רעננה", "הרצליה", "ראשון לציון", "פתח תקווה", "מודיעין", "הוד השרון"];
  model = new UserDetails();
  public DialogOpen = false;

  constructor(private store: Store<fromStore.SystemState>, private webApiService: WebApiService) { }

  ngOnInit() {
    this.store.select(fromStore.getIsUserDialogOpen).subscribe(x => this.userDetailsOpen = x);
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
      this.store.dispatch(new fromActions.UserDialogChange(false));
    }

    public openForm() {
      this.store.dispatch(new fromActions.UserDialogChange(true));
    }

    public closeDialog() {
      this.DialogOpen = false;
      this.callWebApi();
    }

    public openDialog() {
      this.DialogOpen = true;
    }

    callWebApi() {
      this.webApiService.createNewUser(this.model).subscribe((data: boolean) => {
          console.log("createUser", data);
          this.webApiService.getUserResults(this.model).subscribe((asset: Asset[]) => {
          console.log("assets: ", asset);
          this.model = new UserDetails();
          });
        });
      this.webApiService.check().subscribe((data: boolean) =>
        console.log("data", data)
      );      
    }
}
