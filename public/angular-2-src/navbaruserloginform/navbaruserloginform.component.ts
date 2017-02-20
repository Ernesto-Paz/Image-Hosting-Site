import { Component, ViewChild } from "@angular/core";
import { GlobalHttpService } from "../services/http.service";

    @Component({
        moduleId: module.id,
        selector: "navbaruserloginform",
        templateUrl:"./navbaruserloginform.component.html"
        })

export class NavBarUserLoginFormComponent{
    @ViewChild("navbaruserloginform") navbaruserloginform;
constructor(private globalhttp: GlobalHttpService){
    
    
    
}

onSubmit(){
    let form = this.navbaruserloginform.nativeElement;
    console.log(form);
    let loginform: FormData  = new FormData(form);
    this.globalhttp.submitform(loginform, "/users/registernewuser", "POST", ()=> {/*run login handler here */});
}    
    
}