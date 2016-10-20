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
public fileid: string = "";
public image: any;

ngOnInit(){
    console.log(this.route.params);
this.route.params.forEach((params: Params)=>{
    this.fileid = params["id"];
    console.log(this.fileid);
    });
    this.getsingleimage();
}

private getsingleimage(){

    this.globalhttp.getsingleimage(this.fileid).subscribe(
        (res) => this.image = res ,
        (error) => console.log(error),
() => {console.log("Done getting image info"); console.log(this.image); this.image.url = "/getimage/" + this.fileid; }
    );

}    

}