import { Component, OnInit } from '@angular/core';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //TODO: get this from server:
  source: string[];// = ['תוצרת הארץ, תל אביב' , 'כפר גנים ג, פתח תקווה', 'גבעת הסלעים, ראש העין ' ];
  public data: string[];

  constructor(private webApiService: WebApiService) { 
  }

  ngOnInit() {
    this.webApiService.getLocations().subscribe(
      data => {
        if (data){
          this.source = data;
        }
        this.data = this.source.slice();
      }
    );
  }

  handleFilter(value) {
    this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);    
  }

  valueChange(value){
    // alert(value);
  }

}
