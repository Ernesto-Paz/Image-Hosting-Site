import {Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalHttpService} from '../services/http.service';
import '../rjs-observables';

@Component({
    moduleId: module.id,
	selector: 'userloginform',
    templateUrl: 'userloginform.component.html'
})

export class UserLoginFormComponent implements OnInit, OnDestroy {
public modalopen: Boolean;
public loggingin: Boolean;
@ViewChild("uploadform") uploadform;
upload: any = {};

constructor(private globalhttp: GlobalHttpService){ 
    this.modalopen = false;
    this.loggingin = false;
}
    
    
ngOnInit(){}
ngOnDestroy(){
} 
    
public toggleModal(): void{
    
    if(!this.loggingin){
        
        this.modalopen = !this.modalopen;
        
    }

}

onSubmit(){
    this.loggingin = true;
    let form = this.uploadform.nativeElement;
    let loginform: FormData  = new FormData(form);
    this.globalhttp.submitForm(loginform, "/users/login", "POST", (res)=> {
        res = JSON.parse(res); 
        console.log(res);
        this.loggingin = false;
        if(res.login == true){
            this.toggleModal();
            console.log(res.login);
            this.globalhttp.isUserLoggedIn = true;
            if(res.username){ //need to check if response sent a username before making change.
                this.globalhttp.username = res.username;
            }
        }
else{
    
    this.toggleModal();
    //Communicate login failure to user.
    
}
    });
    //this.globalhttp.postsingleimage()
}
    
logout(){
this.globalhttp.sendRequest("/users/logout", "POST", {}, (res)=>{
        
        //handle logout. Update variables which will update the view.
        
        this.globalhttp.isUserLoggedIn = false;
        this.globalhttp.username = "default";
        this.globalhttp.adminLevel = null;
        
        })    
    
    
}
    
get diagnostic() { return JSON.stringify(this.upload); }
    
}