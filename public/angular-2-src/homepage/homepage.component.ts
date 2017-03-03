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
public localImagesArray: any[] = [];
@HostListener("document:scroll", ["$event"])
onScroll(event){
if((window.innerHeight + event.pageY) >= (document.body.scrollHeight - 50) && this.loadingnewpage == false){
    console.log("Bottom");
    this.getImages(this.pageOffset);
} 

};
    public pageOffset: number;
constructor(private globalhttp: GlobalHttpService ){
    //subscribe to ImageSubmit event in globalhttp
    this.localImagesArray = this.globalhttp.getImagesArray();
    globalhttp.onImageSubmit.subscribe(() => this.getImages(this.pageOffset), 
    (err) => console.log(err));
    this.pageOffset = 0;
}

ngOnInit(){
    this.getImages(this.pageOffset);
}
    
private getImages(pageOffset: number){
    if(this.loadingnewpage == false){
            this.loadingnewpage = true;
            this.globalhttp.getrecentimages(pageOffset).subscribe(
                (res) => {
            if(this.globalhttp.imagesArray.length == 0){
                this.globalhttp.imagesArray.push(res);
                }
                this.globalhttp.imagesArray[this.pageOffset] = res;
                console.log(this.globalhttp.imagesArray);
                console.log(this.globalhttp.imagesArray[this.pageOffset]);
                if(this.globalhttp.imagesArray[this.pageOffset].length >= 30){
                this.pageOffset++;
                }
                },
                (error) => console.log(error),
                () => {console.log("Done getting images.");
                setTimeout(()=>{this.loadingnewpage = false;}, 1000)
                }
                )
        }
}
    

}