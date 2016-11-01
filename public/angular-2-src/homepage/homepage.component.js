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
        globalhttp.onImageSubmit.subscribe(function () { return _this.getImages(_this.pageOffset); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFFOUQsNkJBQWdDLDBCQUEwQixDQUFDLENBQUE7QUFHM0QsUUFBTyxvQkFBb0IsQ0FBQyxDQUFBO0FBUTVCO0lBYUEsMkJBQW9CLFVBQTZCO1FBYmpELGlCQTJDQztRQTlCbUIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFaMUMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFVNUIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRzlCLDhDQUE4QztRQUM5QyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBZEQsb0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDZCxFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ3hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUVELENBQUM7O0lBU0Qsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxxQ0FBUyxHQUFqQixVQUFrQixVQUFrQjtRQUFwQyxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUNqRCxVQUFDLEdBQUc7WUFDUixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDekQsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLENBQUM7WUFDRCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixFQUNyQyxjQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FDbkMsQ0FBQTtJQUNULENBQUM7SUF0Q0Q7UUFBQyxtQkFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7cURBQUE7SUFSNUM7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1lBQ2pCLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzs7eUJBQUE7SUE2Q0Ysd0JBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDO0FBM0NZLHlCQUFpQixvQkEyQzdCLENBQUEifQ==