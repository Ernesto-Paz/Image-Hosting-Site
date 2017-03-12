"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ImgThumbnailComponent = (function () {
    function ImgThumbnailComponent() {
    }
    ImgThumbnailComponent.prototype.ngOnInit = function () {
        this.image.url = "/getimage/" + this.image.thumbnailKey;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ImgThumbnailComponent.prototype, "image", void 0);
    ImgThumbnailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "imgthumbnail",
            templateUrl: "./imgthumbnail.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ImgThumbnailComponent);
    return ImgThumbnailComponent;
}());
exports.ImgThumbnailComponent = ImgThumbnailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1ndGh1bWJuYWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltZ3RodW1ibmFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQVF4RDtJQUFBO0lBT0EsQ0FBQztJQUpELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDNUQsQ0FBQztJQUpEO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQVBKO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUMsK0JBQStCO1NBQzFDLENBQUM7OzZCQUFBO0lBU1YsNEJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLDZCQUFxQix3QkFPakMsQ0FBQSJ9