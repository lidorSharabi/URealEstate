import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromActions from "../../store/actions/URealEstate.actions";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

srcq = 'https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg';
// src = 'https://unsplash.it/300x300?image=1060';
// src = '../../../assets/images/pic'+ this.picNum + 'jpeg'
src: string;
liked = !true;
disliked = !true;
address = "ראש העין"
userDetailsOpen: boolean;
@Input() header: string;
@Input() picNum: number;


  constructor(private store: Store<fromStore.SystemState>) { 
    
  }

  ngOnInit() {
    this.store.select(fromStore.getIsUserDialogOpen).subscribe(x => this.userDetailsOpen = x);
    // console.log("i: ", this.picNum);
    this.src = '../../../assets/images/pic'+ this.picNum + '.jpg'
  }

  next_pic(){
    this.src = '../../../assets/images/view2.jpeg';
  }

  likeClick(){
    this.liked = !this.liked;
  }

  dislikeClick(){
    this.disliked = !this.disliked;
  }

  public closeForm() {
    this.store.dispatch(new fromActions.UserDialogChange(false));
  }
}
