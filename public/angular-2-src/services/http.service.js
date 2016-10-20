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
var http_1 = require('@angular/http');
var GlobalHttpService = (function () {
    function GlobalHttpService(http) {
        this.http = http;
        //private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        //private options = new RequestOptions({ headers: this.headers });
        this.rooturl = "/api/";
    }
    GlobalHttpService.prototype.getlast10 = function () {
        console.log("getlast10 called.");
        var imageurl = this.rooturl + "last10images";
        return this.http.get(imageurl).map(this.ResponseData);
    };
    GlobalHttpService.prototype.getsingleimage = function (imagename) {
        console.log("getsingleimage called.");
        var imageurl = this.rooturl + imagename;
        return this.http.get(imageurl).map(this.ResponseData);
    };
    GlobalHttpService.prototype.ResponseData = function (res) {
        console.log("ResponseData Function");
        var body = res.json();
        return body || { error: "404" };
    };
    GlobalHttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GlobalHttpService);
    return GlobalHttpService;
}());
exports.GlobalHttpService = GlobalHttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBS3RFO0lBS0ksMkJBQXFCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSC9CLDRGQUE0RjtRQUM1RixrRUFBa0U7UUFDM0QsWUFBTyxHQUFXLE9BQU8sQ0FBQztJQUdyQyxDQUFDO0lBRU0scUNBQVMsR0FBaEI7UUFDWSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVFLDBDQUFjLEdBQXJCLFVBQXNCLFNBQWlCO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ00sd0NBQVksR0FBbkIsVUFBb0IsR0FBYTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFDcEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUE7SUFFakMsQ0FBQztJQTNCRDtRQUFDLGlCQUFVLEVBQUU7O3lCQUFBO0lBNEJiLHdCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSx5QkFBaUIsb0JBMEI3QixDQUFBIn0=