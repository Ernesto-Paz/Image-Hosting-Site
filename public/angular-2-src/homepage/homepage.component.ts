import {Component, OnInit, HostListener} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalHttpService} from '../services/http.service';
import {ImgThumbnailComponent} from "../imgthumbnail/imgthumbnail.component";
import {ImgSubmitFormComponent} from "../imgsubmitform/imgsubmitform.component";
import '../rjs-observables';

@Component({
    moduleId: module.id,
	selector: 'homepage',
    templateUrl: 'homepage.component.html'
})

export class HomepageComponent implements OnInit{
public loadingnewpage: boolean = false;
@HostListener("document:scroll", ["$event"])
onScroll(event){
if((window.innerHeight + event.pageY) >= (document.body.scrollHeight - 50) && this.loadingnewpage == false){
    console.log("Bottom");
    this.loadingnewpage = true;
    this.getImages(this.pageOffset);
} 

};
    public recentimagesarray = [];
    public pageOffset: number;
constructor(private globalhttp: GlobalHttpService ){
    //subscribe to ImageSubmit event in globalhttp
    globalhttp.onImageSubmit.subscribe(() => this.getImages(this.pageOffset), 
    (err) => console.log(err));
    this.pageOffset = 0;
}

ngOnInit(){
    this.getImages(this.pageOffset);
}
    
private getImages(pageOffset: number){
    this.globalhttp.getrecentimages(pageOffset).subscribe(
        (res) => {
    if(this.recentimagesarray.length == 0){
        this.recentimagesarray.push(res);
        }
        this.recentimagesarray[this.pageOffset] = res;
        console.log(this.recentimagesarray);
        console.log(this.recentimagesarray[this.pageOffset]);
        if(this.recentimagesarray[this.pageOffset].length >= 30){
        this.pageOffset++;
        }
        this.loadingnewpage = false;
        },
        (error) => console.log(error),
        () => {console.log("Done getting images.");}
        )
}
    

}