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
        this.recentimagesarray = [];
        //subscribe to ImageSubmit event in globalhttp
        globalhttp.onImageSubmit.subscribe(function () { return _this.getImages(_this.pageOffset); }, function (err) { return console.log(err); });
        this.pageOffset = 0;
    }
    HomepageComponent.prototype.onScroll = function (event) {
        if ((window.innerHeight + event.pageY) >= (document.body.scrollHeight - 50) && this.loadingnewpage == false) {
            console.log("Bottom");
            this.loadingnewpage = true;
            this.getImages(this.pageOffset);
        }
    };
    ;
    HomepageComponent.prototype.ngOnInit = function () {
        this.getImages(this.pageOffset);
    };
    HomepageComponent.prototype.getImages = function (pageOffset) {
        var _this = this;
        this.globalhttp.getrecentimages(pageOffset).subscribe(function (res) {
            if (_this.recentimagesarray.length == 0) {
                _this.recentimagesarray.push(res);
            }
            _this.recentimagesarray[_this.pageOffset] = res;
            console.log(_this.recentimagesarray);
            console.log(_this.recentimagesarray[_this.pageOffset]);
            if (_this.recentimagesarray[_this.pageOffset].length >= 30) {
                _this.pageOffset++;
            }
            _this.loadingnewpage = false;
        }, function (error) { return console.log(error); }, function () { console.log("Done getting images."); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFFOUQsNkJBQWdDLDBCQUEwQixDQUFDLENBQUE7QUFHM0QsUUFBTyxvQkFBb0IsQ0FBQyxDQUFBO0FBUTVCO0lBYUEsMkJBQW9CLFVBQTZCO1FBYmpELGlCQTJDQztRQTlCbUIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFaMUMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFVNUIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRzlCLDhDQUE4QztRQUM5QyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQS9CLENBQStCLEVBQUUsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQWRELG9DQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ2QsRUFBRSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksS0FBSyxDQUFDLENBQUEsQ0FBQztZQUN4RyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFFRCxDQUFDOztJQVNELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8scUNBQVMsR0FBakIsVUFBa0IsVUFBa0I7UUFBcEMsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FDakQsVUFBQyxHQUFHO1lBQ1IsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFDRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JELEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pELEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBQ0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDckMsY0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQSxDQUFDLENBQ25DLENBQUE7SUFDVCxDQUFDO0lBdENEO1FBQUMsbUJBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3FEQUFBO0lBUjVDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixRQUFRLEVBQUUsVUFBVTtZQUNqQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7O3lCQUFBO0lBNkNGLHdCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDWSx5QkFBaUIsb0JBMkM3QixDQUFBIn0=