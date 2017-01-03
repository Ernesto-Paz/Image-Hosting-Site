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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFFOUQsNkJBQWdDLDBCQUEwQixDQUFDLENBQUE7QUFHM0QsUUFBTyxvQkFBb0IsQ0FBQyxDQUFBO0FBUTVCO0lBYUEsMkJBQW9CLFVBQTZCO1FBYmpELGlCQTRDQztRQS9CbUIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFaMUMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFVNUIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRzlCLDhDQUE4QztRQUM5QyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQS9CLENBQStCLEVBQ3hFLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFmRCxvQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNkLEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDeEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBRUQsQ0FBQzs7SUFVRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLHFDQUFTLEdBQWpCLFVBQWtCLFVBQWtCO1FBQXBDLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUMsR0FBRztZQUNSLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUN6RCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUNELEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLEVBQ3JDLGNBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUNuQyxDQUFBO0lBQ1QsQ0FBQztJQXZDRDtRQUFDLG1CQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztxREFBQTtJQVI1QztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsUUFBUSxFQUFFLFVBQVU7WUFDakIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDOzt5QkFBQTtJQThDRix3QkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1kseUJBQWlCLG9CQTRDN0IsQ0FBQSJ9