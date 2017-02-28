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
        this.upload = { title: "" };
        this.onImageSubmitSubscription = globalhttp.onImageSubmit.subscribe(function () { _this.uploadingImage = false; _this.toggleModal(); }, function (err) { console.log("Test"); console.log(err); });
        this.modalopen = false;
        this.uploadingImage = false;
    }
    ImgSubmitFormComponent.prototype.ngOnInit = function () { };
    ImgSubmitFormComponent.prototype.ngOnDestroy = function () {
        this.onImageSubmitSubscription.unsubscribe();
    };
    ImgSubmitFormComponent.prototype.toggleModal = function () {
        if (!this.uploadingImage) {
            this.modalopen = !this.modalopen;
        }
    };
    ImgSubmitFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.uploadingImage = true;
        var form = this.uploadform.nativeElement;
        var imageform = new FormData(form);
        this.globalhttp.submitForm(imageform, "/api/uploadnewimage", "POST", function () { _this.globalhttp.onImageSubmit.emit(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1nc3VibWl0Zm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWdzdWJtaXRmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRFLGVBQWUsQ0FBQyxDQUFBO0FBRTVGLDZCQUFnQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzNELFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQVE1QjtJQU9BLGdDQUFvQixVQUE2QjtRQVBqRCxpQkF1Q0M7UUFoQ21CLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBSGpELFdBQU0sR0FBUSxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsQ0FBQztRQUl6QixJQUFJLENBQUMseUJBQXlCLEdBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBTSxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBLENBQUMsRUFBRSxVQUFDLEdBQUcsSUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFBO1FBQzVLLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFHRCx5Q0FBUSxHQUFSLGNBQVcsQ0FBQztJQUNaLDRDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVNLDRDQUFXLEdBQWxCO1FBRUksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUEsQ0FBQztZQUVyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVyQyxDQUFDO0lBRUwsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksU0FBUyxHQUFjLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsY0FBTSxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ25ILG1DQUFtQztJQUN2QyxDQUFDO0lBRUQsc0JBQUksOENBQVU7YUFBZCxjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQWxDeEQ7UUFBQyxnQkFBUyxDQUFDLFlBQVksQ0FBQzs7OERBQUE7SUFUeEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFFBQVEsRUFBRSxlQUFlO1lBQ3RCLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzs7OEJBQUE7SUF5Q0YsNkJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLDhCQUFzQix5QkF1Q2xDLENBQUEifQ==