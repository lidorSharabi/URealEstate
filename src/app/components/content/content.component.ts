import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
srcq = 'https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg';
src = 'https://unsplash.it/300x300?image=1060';
liked = !true;
disliked = !true;

  constructor() { }

  ngOnInit() {
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
