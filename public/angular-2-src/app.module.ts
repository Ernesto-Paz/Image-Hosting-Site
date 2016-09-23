import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import
       { ExampleComponent }  from './example.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ExampleComponent ],
  bootstrap:    [ ExampleComponent ]
})
export class AppModule { }