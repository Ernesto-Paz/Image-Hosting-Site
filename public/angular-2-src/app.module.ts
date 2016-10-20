import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { BaseTemplateComponent } from "./basetemplate/basetemplate.component";
import { HomepageComponent }  from './homepage/homepage.component';
import { ImgThumbnailComponent } from './imgthumbnail/imgthumbnail.component';
import { SoloImagePageComponent } from "./soloimagepage/soloimagepage.component";
import { GlobalHttpService }  from './services/http.service';

const appRoutes = RouterModule.forRoot([
    { path: '',      component: HomepageComponent },
    { path: ':id', component: SoloImagePageComponent }
]);


@NgModule({
  imports: [ BrowserModule, HttpModule, appRoutes],
  declarations: [ HomepageComponent, ImgThumbnailComponent, BaseTemplateComponent, SoloImagePageComponent],
  providers: [GlobalHttpService],
  bootstrap: [ BaseTemplateComponent ]
})
export class AppModule { }