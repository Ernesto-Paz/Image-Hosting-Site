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
var core_1 = require('@angular/core');
var http_service_1 = require('../services/http.service');
require('../rjs-observables');
var ImgSubmitFormComponent = (function () {
    function ImgSubmitFormComponent(globalhttp) {
        this.globalhttp = globalhttp;
        this.onSubmitted = new core_1.EventEmitter();
        this.upload = { title: "" };
        this.modalopen = false;
    }
    ImgSubmitFormComponent.prototype.ngOnInit = function () {
    };
    ImgSubmitFormComponent.prototype.toggleModal = function () {
        this.modalopen = !this.modalopen;
    };
    ImgSubmitFormComponent.prototype.onSubmit = function () {
        var form = this.uploadform.nativeElement;
        var imageform = new FormData(form);
        this.globalhttp.submitform(imageform, "/api/uploadnewimage");
        //this.globalhttp.postsingleimage()
    };
    Object.defineProperty(ImgSubmitFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.upload); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild("uploadform"), 
        __metadata('design:type', Object)
    ], ImgSubmitFormComponent.prototype, "uploadform", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImgSubmitFormComponent.prototype, "onSubmitted", void 0);
    ImgSubmitFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'imgsubmitform',
            templateUrl: 'imgsubmitform.component.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.GlobalHttpService])
    ], ImgSubmitFormComponent);
    return ImgSubmitFormComponent;
}());
exports.ImgSubmitFormComponent = ImgSubmitFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1nc3VibWl0Zm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWdzdWJtaXRmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlFLGVBQWUsQ0FBQyxDQUFBO0FBRWpGLDZCQUFnQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzNELFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQVE1QjtJQUtBLGdDQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUZ2QyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzNDLFdBQU0sR0FBUSxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0QseUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDTSw0Q0FBVyxHQUFsQjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBRXJDLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxTQUFTLEdBQWMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDN0QsbUNBQW1DO0lBQ3ZDLENBQUM7SUFFRCxzQkFBSSw4Q0FBVTthQUFkLGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBdEJ4RDtRQUFDLGdCQUFTLENBQUMsWUFBWSxDQUFDOzs4REFBQTtJQUN4QjtRQUFDLGFBQU0sRUFBRTs7K0RBQUE7SUFUVDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsUUFBUSxFQUFFLGVBQWU7WUFDdEIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDOzs4QkFBQTtJQTRCRiw2QkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksOEJBQXNCLHlCQTBCbEMsQ0FBQSJ9