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
var router_1 = require('@angular/router');
var http_service_1 = require("../services/http.service");
var SoloImagePageComponent = (function () {
    function SoloImagePageComponent(router, route, globalhttp) {
        this.router = router;
        this.route = route;
        this.globalhttp = globalhttp;
        this.fileid = "";
    }
    SoloImagePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.params);
        this.route.params.forEach(function (params) {
            _this.fileid = params["id"];
            console.log(_this.fileid);
        });
        this.getsingleimage();
        console.log("outside the http call.");
        console.log(this.image);
    };
    SoloImagePageComponent.prototype.getsingleimage = function () {
        var _this = this;
        this.globalhttp.getsingleimage(this.fileid).subscribe(function (res) { return _this.image = res; }, function (error) { return console.log(error); }, function () { console.log("Done getting image info"); console.log(_this.image); _this.image.url = "/getimage/" + _this.fileid; });
    };
    SoloImagePageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "soloimagepage",
            templateUrl: "./soloimagepage.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, http_service_1.GlobalHttpService])
    ], SoloImagePageComponent);
    return SoloImagePageComponent;
}());
exports.SoloImagePageComponent = SoloImagePageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sb2ltYWdlcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzb2xvaW1hZ2VwYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdDLGVBQWUsQ0FBQyxDQUFBO0FBQ3hELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLDZCQUFrQywwQkFBMEIsQ0FBQyxDQUFBO0FBUTdEO0lBQ0EsZ0NBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUFVLFVBQTZCO1FBQXBGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBR2pHLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFEM0IsQ0FBQztJQUlELHlDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFjO1lBQ3JDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sK0NBQWMsR0FBdEI7UUFBQSxpQkFRQztRQU5HLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQWhCLENBQWdCLEVBQ3pCLFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDckMsY0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFlBQVksR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUNqSCxDQUFDO0lBRU4sQ0FBQztJQWxDRztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFDLGdDQUFnQztTQUMzQyxDQUFDOzs4QkFBQTtJQWdDViw2QkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QlksOEJBQXNCLHlCQThCbEMsQ0FBQSJ9