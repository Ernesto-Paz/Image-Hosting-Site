import { Component, Input, OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalHttpService } from "../services/http.service";

    @Component({
        moduleId: module.id,
        selector: "soloimagepage",
        templateUrl:"./soloimagepage.component.html"
        })

export class SoloImagePageComponent implements OnInit{
constructor(private router: Router, private route: ActivatedRoute, private globalhttp: GlobalHttpService){
    
}    
public fileId: string = "";
public image: any;

ngOnInit(){
    console.log(this.route.params);
this.route.params.forEach((params: Params)=>{
    this.fileId = params["id"];
    console.log(this.fileId);
    });
    this.getsingleimage();
}

private getsingleimage(){
    this.globalhttp.getsingleimage(this.fileId).subscribe(
        (res) => this.image = res ,
        (error) => console.log(error),
() => {
    if(this.image){
        console.log("Done getting image info"); console.log(this.image); this.image.url = "/getimage/" + this.image.key;
        }
    else{
        
        //throw a 404 here
        
}}
    );

}
    
private vote(data: any){
    let imagekey = this.image.key;
    this.globalhttp.postRequestObservable("/api/submitvote/" + imagekey ,data).subscribe(
        (res) => {}   ,
        (error) => {}  ,
() => {
    
    
    
}
        
        
        
        )
    
    
}

}