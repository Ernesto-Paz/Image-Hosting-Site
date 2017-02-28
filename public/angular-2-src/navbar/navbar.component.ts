import { Component, ViewChild } from "@angular/core";
import { GlobalHttpService } from "../services/http.service";
import {UserRegistrationFormComponent} from "../userregistrationform/userregistrationform.component";
import {ImgSubmitFormComponent} from "../imgsubmitform/imgsubmitform.component";
import { UserLoginFormComponent } from "../userloginform/userloginform.component"; 

    @Component({
        moduleId: module.id,
        selector: "navbar",
        templateUrl:"./navbar.component.html"
        })

export class NavBarComponent{
    @ViewChild("navbar") navbar;
constructor(private globalhttp: GlobalHttpService){
    
    
    
}
    
    
}