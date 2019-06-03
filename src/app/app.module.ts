import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigateBarComponent } from './components/navigate-bar/navigate-bar.component';
import { ContentComponent } from './components/content/content.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
// import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';




@NgModule({
  declarations: [
    AppComponent,
    NavigateBarComponent,
    MainPanelComponent,
    FooterComponent,
    ContentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // FilterPipeModule,
    FormsModule,
    // DropDownsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }