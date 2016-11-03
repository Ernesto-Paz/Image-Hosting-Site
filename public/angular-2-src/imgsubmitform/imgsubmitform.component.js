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
        var _this = this;
        this.globalhttp = globalhttp;
        this.onSubmitted = new core_1.EventEmitter();
        this.upload = { title: "" };
        globalhttp.onImageSubmit.subscribe(function () { _this.uploadingImage = false; _this.toggleModal(); });
        this.modalopen = false;
        this.uploadingImage = false;
    }
    ImgSubmitFormComponent.prototype.ngOnInit = function () { };
    ImgSubmitFormComponent.prototype.toggleModal = function () {
        if (!this.uploadingImage) {
            this.modalopen = !this.modalopen;
        }
    };
    ImgSubmitFormComponent.prototype.onSubmit = function () {
        this.uploadingImage = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1nc3VibWl0Zm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWdzdWJtaXRmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlFLGVBQWUsQ0FBQyxDQUFBO0FBRWpGLDZCQUFnQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzNELFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQVE1QjtJQU1BLGdDQUFvQixVQUE2QjtRQU5qRCxpQkFvQ0M7UUE5Qm1CLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBRnZDLGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDM0MsV0FBTSxHQUFRLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxDQUFDO1FBRXJCLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGNBQU0sS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQTtRQUMzRixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBR0QseUNBQVEsR0FBUixjQUFXLENBQUM7SUFHTCw0Q0FBVyxHQUFsQjtRQUVJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUM7WUFFckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFckMsQ0FBQztJQUVMLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxTQUFTLEdBQWMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDN0QsbUNBQW1DO0lBQ3ZDLENBQUM7SUFFRCxzQkFBSSw4Q0FBVTthQUFkLGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBL0J4RDtRQUFDLGdCQUFTLENBQUMsWUFBWSxDQUFDOzs4REFBQTtJQUN4QjtRQUFDLGFBQU0sRUFBRTs7K0RBQUE7SUFWVDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsUUFBUSxFQUFFLGVBQWU7WUFDdEIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDOzs4QkFBQTtJQXNDRiw2QkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksOEJBQXNCLHlCQW9DbEMsQ0FBQSJ9