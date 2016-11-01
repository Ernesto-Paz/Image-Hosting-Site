import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from "./app/app.component";
import { ImgThumbnailComponent } from './imgthumbnail/imgthumbnail.component';
import { GlobalHttpService }  from './services/http.service';
import { HomepageComponent }  from './homepage/homepage.component';
import { SoloImagePageComponent } from "./soloimagepage/soloimagepage.component";
import { ImgSubmitFormComponent } from "./imgsubmitform/imgsubmitform.component";

import { AppRoutingModule } from "./app.routing.module";


@NgModule({
  imports: [ BrowserModule, HttpModule, AppRoutingModule, FormsModule ],
  declarations: [ HomepageComponent, ImgThumbnailComponent, AppComponent, SoloImagePageComponent, ImgSubmitFormComponent ],
  providers: [GlobalHttpService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }