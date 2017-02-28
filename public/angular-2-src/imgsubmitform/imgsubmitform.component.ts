import {Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalHttpService} from '../services/http.service';
import '../rjs-observables';

@Component({
    moduleId: module.id,
	selector: 'imgsubmitform',
    templateUrl: 'imgsubmitform.component.html'
})

export class ImgSubmitFormComponent implements OnInit, OnDestroy {
public modalopen: Boolean;
public uploadingImage: Boolean;
@ViewChild("uploadform") uploadform;
upload: any = {title:""};

private onImageSubmitSubscription;
constructor(private globalhttp: GlobalHttpService){
this.onImageSubmitSubscription =  globalhttp.onImageSubmit.subscribe(()=> {this.uploadingImage = false; this.toggleModal();}, (err) => {console.log("Test"); console.log(err);}) 
    this.modalopen = false;
    this.uploadingImage = false;
}
    
    
ngOnInit(){}
ngOnDestroy(){
    this.onImageSubmitSubscription.unsubscribe();
} 
    
public toggleModal(): void{
    
    if(!this.uploadingImage){
        
        this.modalopen = !this.modalopen;
        
    }

}

onSubmit(){
    this.uploadingImage = true;
    let form = this.uploadform.nativeElement;
    let imageform: FormData  = new FormData(form);
    this.globalhttp.submitForm(imageform, "/api/uploadnewimage", "POST", ()=> {this.globalhttp.onImageSubmit.emit();});
    //this.globalhttp.postsingleimage()
}
    
get diagnostic() { return JSON.stringify(this.upload); }
    
}