import { Component } from "@angular/core";
import {GlobalHttpService} from "../services/http.service";

    @Component ({
        moduleId: module.id,
        selector: "app",
        templateUrl: "app.component.html"
        })

export class AppComponent {
constructor(private globalhttp: GlobalHttpService){
    this.globalhttp.checkSession();   
    
    
}

}