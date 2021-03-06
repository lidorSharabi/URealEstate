import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/models/asset.model';
@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  assetsList = new Array<Asset>();
  
  contentsHeaders = ["דירה, 4 חדרים, 105 מ'ר, קומה 3, תוצרת הארץ, תל אביב", "דירה, 5 חדרים, 120 מ'ר, קומה 12, נווה זמר, רעננה",
  "דירה, 4.5 חדרים, 116 מ'ר, קומה 2, מנחם בגין, רמת השרון" , "דירה, 3 חדרים, 96 מ'ר, גבעת הסלעים, ראש העין",
   "דירה, 5 חדרים, 130 מ'ר, קומה 8,כפר גנים ג, פתח תקווה", "דירה, 4 חדרים, 135 מ'ר, קומה 5, נווה זמר, רעננה",
   "דירה, 4 חדרים, 120 מ'ר, קומה 1, הרצליה", "דירה, 6 חדרים, 150 מ'ר, קומה 8, תוצרת הארץ, תל אביב",
   "דירה, 5 חדרים, 135 מ'ר, קומה 2,פסגות אפק, ראש העין" ]
  constructor() {   

  }

  ngOnInit() {
  }

}
