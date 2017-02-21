import {Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalHttpService} from '../services/http.service';
import '../rjs-observables';

@Component({
    moduleId: module.id,
	selector: 'userregistrationform',
    templateUrl: 'userregistrationform.component.html'
})

export class UserRegistrationFormComponent implements OnInit, OnDestroy {
public modalopen: Boolean;
public registering: Boolean;
@ViewChild("uploadform") uploadform;
upload: any = {};

constructor(private globalhttp: GlobalHttpService){ 
    this.modalopen = false;
    this.registering = false;
}
    
    
ngOnInit(){}
ngOnDestroy(){
} 
    
public toggleModal(): void{
    
    if(!this.registering){
        
        this.modalopen = !this.modalopen;
        
    }

}

onSubmit(){
    this.registering = true;
    let form = this.uploadform.nativeElement;
    let registrationform: FormData  = new FormData(form);
    this.globalhttp.submitform(registrationform, "/users/registernewuser", "POST", ()=> {this.registering = false; this.toggleModal();});
    //this.globalhttp.postsingleimage()
}
    
get diagnostic() { return JSON.stringify(this.upload); }
    
}