import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalHttpService} from '../services/http.service';
import '../rjs-observables';

@Component({
    moduleId: module.id,
	selector: 'imgsubmitform',
    templateUrl: 'imgsubmitform.component.html'
})

export class ImgSubmitFormComponent implements OnInit{
public modalopen: Boolean;
public uploadingImage: Boolean;
@ViewChild("uploadform") uploadform;
@Output() onSubmitted = new EventEmitter();
upload: any = {title:""};   
constructor(private globalhttp: GlobalHttpService){
    globalhttp.onImageSubmit.subscribe(()=> {this.uploadingImage = false; this.toggleModal();}) 
    this.modalopen = false;
    this.uploadingImage = false;
}
    
    
ngOnInit(){}
    
    
public toggleModal(): void{
    
    if(!this.uploadingImage){
        
        this.modalopen = !this.modalopen;
        
    }

}

onSubmit(){
    this.uploadingImage = true;
    let form = this.uploadform.nativeElement;
    let imageform: FormData  = new FormData(form);
    this.globalhttp.submitform(imageform, "/api/uploadnewimage");
    //this.globalhttp.postsingleimage()
}
    
get diagnostic() { return JSON.stringify(this.upload); }
    
}