import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigateBarComponent } from './components/navigate-bar/navigate-bar.component';
import { ContentComponent } from './components/content/content.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/URealEstate.reducer';
import { WebApiService } from './services/web-api.service';




@NgModule({
  declarations: [
    AppComponent,
    NavigateBarComponent,
    MainPanelComponent,
    FooterComponent,
    ContentComponent,
    SearchComponent,
    SignInFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    // FilterPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    DialogsModule,
    ButtonsModule,
    StoreModule.forRoot(reducer),    
    HttpClientModule,
    
  ],
  providers: [WebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }