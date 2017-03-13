import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalHttpService } from "../services/http.service.ts";

    @Component({
        moduleId: module.id,
        selector: "userpage",
        templateUrl: "./userpage.component.html"     
        })

export class UserPageComponent implements OnInit{

    
var userInfo: any;
var params: any = {};
    
constructor(private router: Router, private route: ActivatedRoute, private globalhttp: GlobalHttpService){
        
    
} 

ngOnInit(){
    this.route.params.subscribe((params: Params)=>{
            this.params.username = params.username;
        
           this.globalhttp.sendRequest("/api/user/ " + this.params.username, "GET", null, (res)=>{
            
            this.userInfo = res;
        //do things here
        
        })  
        
        })
   
    
    
}


    
    
    
}