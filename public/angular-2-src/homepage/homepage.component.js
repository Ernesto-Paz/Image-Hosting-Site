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
var HomepageComponent = (function () {
    function HomepageComponent(globalhttp) {
        var _this = this;
        this.globalhttp = globalhttp;
        this.loadingnewpage = false;
        this.localImagesArray = [];
        //subscribe to ImageSubmit event in globalhttp
        this.localImagesArray = this.globalhttp.getImagesArray();
        globalhttp.onImageSubmit.subscribe(function () { return _this.getImages(_this.pageOffset); }, function (err) { return console.log(err); });
        this.pageOffset = 0;
    }
    HomepageComponent.prototype.onScroll = function (event) {
        if ((window.innerHeight + event.pageY) >= (document.body.scrollHeight - 50) && this.loadingnewpage == false) {
            console.log("Bottom");
            this.getImages(this.pageOffset);
        }
    };
    ;
    HomepageComponent.prototype.ngOnInit = function () {
        this.getImages(this.pageOffset);
    };
    HomepageComponent.prototype.getImages = function (pageOffset) {
        var _this = this;
        if (this.loadingnewpage == false) {
            this.loadingnewpage = true;
            this.globalhttp.getrecentimages(pageOffset).subscribe(function (res) {
                if (_this.globalhttp.imagesArray.length == 0) {
                    _this.globalhttp.imagesArray.push(res);
                }
                _this.globalhttp.imagesArray[_this.pageOffset] = res;
                console.log(_this.globalhttp.imagesArray);
                console.log(_this.globalhttp.imagesArray[_this.pageOffset]);
                if (_this.globalhttp.imagesArray[_this.pageOffset].length >= 30) {
                    _this.pageOffset++;
                }
            }, function (error) { return console.log(error); }, function () {
                console.log("Done getting images.");
                setTimeout(function () { _this.loadingnewpage = false; }, 1000);
            });
        }
    };
    __decorate([
        core_1.HostListener("document:scroll", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HomepageComponent.prototype, "onScroll", null);
    HomepageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'homepage',
            templateUrl: 'homepage.component.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.GlobalHttpService])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFFOUQsNkJBQWdDLDBCQUEwQixDQUFDLENBQUE7QUFHM0QsUUFBTyxvQkFBb0IsQ0FBQyxDQUFBO0FBUTVCO0lBWUEsMkJBQW9CLFVBQTZCO1FBWmpELGlCQWdEQztRQXBDbUIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFYMUMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBV2hDLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6RCxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQS9CLENBQStCLEVBQ3hFLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFkRCxvQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNkLEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDeEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBRUQsQ0FBQzs7SUFVRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLHFDQUFTLEdBQWpCLFVBQWtCLFVBQWtCO1FBQXBDLGlCQXFCQztRQXBCRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUNqRCxVQUFDLEdBQUc7Z0JBQ1IsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQ3hDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztvQkFDOUQsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixDQUFDO1lBQ0QsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDN0I7Z0JBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUMzQyxVQUFVLENBQUMsY0FBSyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFBLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNwRCxDQUFDLENBQ0EsQ0FBQTtRQUNULENBQUM7SUFDVCxDQUFDO0lBMUNEO1FBQUMsbUJBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3FEQUFBO0lBVDVDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixRQUFRLEVBQUUsVUFBVTtZQUNqQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7O3lCQUFBO0lBa0RGLHdCQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQztBQWhEWSx5QkFBaUIsb0JBZ0Q3QixDQUFBIn0=