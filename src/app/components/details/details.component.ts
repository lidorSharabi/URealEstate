import { Component, OnInit, Input } from '@angular/core';

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
@Input() header: string;
@Input() picNum: number;


  constructor() { 
    
  }

  ngOnInit() {
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
}
