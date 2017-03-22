import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalHttpService } from "../services/http.service";

    @Component({
        moduleId: module.id,
        selector: "userpage",
        templateUrl: "./userpage.component.html"     
        })

export class UserPageComponent implements OnInit{
constructor(private router: Router, private route: ActivatedRoute, private globalhttp: GlobalHttpService){
        
    
} 
    
userInfo: any = {};
params: any = {};
    


ngOnInit(){
    this.route.params.subscribe((params: Params)=>{
this.params.username = params["username"];
        
           this.globalhttp.sendRequest("/api/user/" + this.params.username, "GET", null, (res)=>{
            
            this.userInfo = res;
            console.log(res);
        //do things here
        
        });  
        
        })
   
    
    
}


    
    
    
}