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
        this.globalhttp = globalhttp;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.getImages();
        console.log("ngOnInit Example Component");
    };
    HomepageComponent.prototype.getImages = function () {
        var _this = this;
        this.globalhttp.getlast10().subscribe(function (res) { return _this.top10images = res; }, function (error) { return console.log(error); }, function () { console.log("Done getting images"); console.log(_this.top10images); });
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFFaEQsNkJBQWdDLDBCQUEwQixDQUFDLENBQUE7QUFFM0QsUUFBTyxvQkFBb0IsQ0FBQyxDQUFBO0FBUTVCO0lBR0EsMkJBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO0lBRWpELENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU8scUNBQVMsR0FBakI7UUFBQSxpQkFRQztRQU5HLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUNqQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUF0QixDQUFzQixFQUMvQixVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLEVBQzdCLGNBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQ3pFLENBQUE7SUFFVCxDQUFDO0lBMUJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixRQUFRLEVBQUUsVUFBVTtZQUNqQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7O3lCQUFBO0lBeUJGLHdCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSx5QkFBaUIsb0JBdUI3QixDQUFBIn0=