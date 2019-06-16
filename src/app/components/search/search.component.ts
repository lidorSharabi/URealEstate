import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //TODO: get this from server:
  source: string[] = ['תוצרת הארץ, תל אביב' , 'כפר גנים ג, פתח תקווה', 'גבעת הסלעים, ראש העין ' ];
  public data: string[];

  constructor() { 
    this.data = this.source.slice();
  }

  ngOnInit() {
  }

  handleFilter(value) {
    this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);    
  }

  valueChange(value){
    // alert(value);
  }

}
