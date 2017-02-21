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
        this.onImageSubmit = new core_1.EventEmitter();
        this.onUserLogin = new core_1.EventEmitter();
        //private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        //private options = new RequestOptions({ headers: this.headers });
        this.rooturl = "/api/";
    }
    GlobalHttpService.prototype.getlast10 = function () {
        console.log("getlast10 called.");
        var imageurl = this.rooturl + "last10images";
        return this.http.get(imageurl).map(this.ResponseData);
    };
    GlobalHttpService.prototype.getrecentimages = function (pageNumber) {
        if (!pageNumber) {
            pageNumber = 0;
        }
        console.log("getrecent called. Page " + pageNumber);
        var imageurl = this.rooturl + "recentimages/" + pageNumber;
        return this.http.get(imageurl).map(this.ResponseData);
    };
    GlobalHttpService.prototype.getsingleimage = function (imagename) {
        console.log("getsingleimage called.");
        var imageurl = this.rooturl + imagename;
        return this.http.get(imageurl).map(this.ResponseData);
    };
    GlobalHttpService.prototype.submitform = function (form, url, method, callback) {
        var xhr = new XMLHttpRequest();
        var Imagesubmit = this.onImageSubmit;
        xhr.open(method, url, true);
        xhr.setRequestHeader("enctype", "multipart/form-data");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log("Form Submission Callback");
                callback();
            }
            else if (xhr.readyState == 4) {
                console.log("Form Submission Callback");
                callback();
            }
        };
        xhr.send(form);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBS3RFO0lBUUksMkJBQXFCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTjFCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUV4Qyw0RkFBNEY7UUFDNUYsa0VBQWtFO1FBQzNELFlBQU8sR0FBVyxPQUFPLENBQUM7SUFHckMsQ0FBQztJQUVNLHFDQUFTLEdBQWhCO1FBQ1ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSwyQ0FBZSxHQUF0QixVQUF1QixVQUFtQjtRQUMxQyxFQUFFLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDWixVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxHQUFHLFVBQVUsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sMENBQWMsR0FBckIsVUFBc0IsU0FBaUI7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxzQ0FBVSxHQUFqQixVQUFrQixJQUFjLEVBQUUsR0FBVyxFQUFFLE1BQWMsRUFBRSxRQUFrQjtRQUM3RSxJQUFJLEdBQUcsR0FBbUIsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUMvQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QixHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDM0QsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBQ3pCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQztnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUN4QyxRQUFRLEVBQUUsQ0FBQztZQUNmLENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsRUFBRSxDQUFDO1lBQ2YsQ0FBQztRQUVELENBQUMsQ0FBQTtRQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVNLHdDQUFZLEdBQW5CLFVBQW9CLEdBQWE7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQ3BDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFBO0lBRWpDLENBQUM7SUExREQ7UUFBQyxpQkFBVSxFQUFFOzt5QkFBQTtJQTJEYix3QkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6RFkseUJBQWlCLG9CQXlEN0IsQ0FBQSJ9