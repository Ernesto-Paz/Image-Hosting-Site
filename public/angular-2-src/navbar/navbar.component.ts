import { Component, ViewChild } from "@angular/core";
import { GlobalHttpService } from "../services/http.service";

    @Component({
        moduleId: module.id,
        selector: "navbar",
        templateUrl:"./navbar.component.html"
        })

export class NavBarComponent{
    @ViewChild("navbar") navbar;
constructor(private globalhttp: GlobalHttpService){
    
    
    
}

onSubmit(){
    let form = this.navbar.nativeElement;
    console.log(form);
    let loginform: FormData  = new FormData(form);
    this.globalhttp.submitform(loginform, "/users/login", "POST", (res)=> {
        
    res = JSON.parse(res); 
    console.log(res);
    if(res.login = true){
        this.globalhttp.isUserLoggedIn = true;
        if(res.username){ //need to check if response sent a username before making change.
            this.globalhttp.username = res.username;
        }
    }
else{

    //Communicate login failure to user.
    
}
    });
}    
    
}