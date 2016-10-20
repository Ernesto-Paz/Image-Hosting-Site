import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {GlobalHttpService} from '../services/http.service';
import {ImgThumbnailComponent} from "../imgthumbnail/imgthumbnail.component";
import '../rjs-observables';

@Component({
    moduleId: module.id,
	selector: 'homepage',
    templateUrl: 'homepage.component.html'
})

export class HomepageComponent implements OnInit{
    
public top10images;
constructor(private globalhttp: GlobalHttpService){

}
ngOnInit(){
    
    this.getImages();
    console.log("ngOnInit Example Component");
}
    
private getImages(){

    this.globalhttp.getlast10().subscribe(
        (res) => this.top10images = res,
        (error) => console.log(error),
        () => {console.log("Done getting images"); console.log(this.top10images);}
        )

}
    

}