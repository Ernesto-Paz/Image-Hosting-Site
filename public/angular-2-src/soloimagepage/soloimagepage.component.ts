import { Component, Input, OnInit, OnDestroy} from "@angular/core";
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
public voting: boolean = false;
public userVote: any = {up: null, down: null};
public upvote: any = {vote: true};
public downvote: any = {vote: false};
public params: any;
ngOnInit(){
    console.log(this.route.params);
this.params = this.route.params.subscribe((params: Params)=>{
    this.fileId = params["id"];
    console.log(this.fileId);
    });
    this.getsingleimage();
}
    
ngOnDestroy(){
    this.params.unsubscribe();
    
}

private getsingleimage(){
    this.globalhttp.getsingleimage(this.fileId).subscribe(
        (res) => this.image = res ,
        (error) => console.log(error),
() => {
    if(this.image){
    console.log(this.image);
    this.updateArrow();
        console.log("Done getting image info"); console.log(this.image);
        }
    else{
        
        //throw a 404 here
        
}}
    );
}
    
private updateArrow(){
    console.log("Updating Arrow");
    
    if(this.image.uservote){
                    if(this.image.uservote === 1){this.userVote.up = true; this.userVote.down = false} 
                    else if(this.image.uservote === -1){this.userVote.up = false; this.userVote.down = true;}
                    else if(this.image.uservote === 0){this.userVote.up = false; this.userVote.down = false;}
                }
    else{
        this.userVote.up = false;
        this.userVote.down = false;
        }
    
}
    
private vote(data: any){
    let imagekey = this.image.key;
if(data === "upvotearrow"){
data = {vote: true}; 
    
}else{
data = {vote: false};

    
}
    //check if user has already voted.
    if(this.image.uservote){
        if(data.vote === true && this.image.uservote === 1){ console.log("nulled up"); data.vote = null; }
        else if(data.vote === false && this.image.uservote === -1){ console.log("nulled down"); data.vote = null; }
    }
    //check if voting is in progress
    if(this.voting){
    return;    
    }
    else{
    this.voting = true;
    }
    
    
    this.globalhttp.postRequestObservable("/api/submitvote/" + imagekey , data).subscribe(
        (res) => {console.log("Got response!")}   ,
        (error) => {console.log("got an error"); console.log(error); this.voting = false;}  ,
        () => {
        this.voting = false;
        console.log("Callback from vote post.")
        this.globalhttp.sendRequest("/api/" + this.fileId, "GET", {}, (res) => {
        console.log(res);
        this.image = res;
        this.updateArrow();
        })
    
    
}
        
        
        
        )
    
    
}

}