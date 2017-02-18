import { Component, Input, OnInit} from "@angular/core";

    @Component({
        moduleId: module.id,
        selector: "imgthumbnail",
        templateUrl:"./imgthumbnail.component.html"
        })

export class ImgThumbnailComponent implements OnInit{
@Input() image: any;

ngOnInit(){
    this.image.url = "/getimage/" + this.image.key;
}
    
}