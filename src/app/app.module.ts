import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigateBarComponent } from './components/navigate-bar/navigate-bar.component';
import { ContentComponent } from './components/content/content.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavigateBarComponent,
    MainPanelComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }