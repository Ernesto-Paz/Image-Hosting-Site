import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomepageComponent }  from './homepage/homepage.component';
import { SoloImagePageComponent } from "./soloimagepage/soloimagepage.component";

const appRoutes = RouterModule.forRoot([
    { path: '',      component: HomepageComponent },
    { path: ':id', component: SoloImagePageComponent }
]);

    @NgModule({
imports: [ appRoutes ],
exports: [ RouterModule ]
        })

export class AppRoutingModule {}