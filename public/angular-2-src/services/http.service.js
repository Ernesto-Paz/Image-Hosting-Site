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
        this.isUserLoggedIn = false;
        this.username = "default";
        this.ImagesArray = [];
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
    GlobalHttpService.prototype.submitForm = function (form, url, method, callback) {
        var xhr = new XMLHttpRequest();
        var Imagesubmit = this.onImageSubmit;
        xhr.open(method, url, true);
        xhr.setRequestHeader("enctype", "multipart/form-data");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log("Form Submission Callback");
                callback(xhr.response);
            }
            else if (xhr.readyState == 4) {
                console.log("Form Submission Callback");
                callback();
            }
        };
        xhr.send(form);
    };
    GlobalHttpService.prototype.sendRequest = function (url, method, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        data = JSON.stringify(data);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log("Form Submission Callback");
                callback(xhr.response);
            }
            else if (xhr.readyState == 4) {
                console.log("Form Submission Callback");
                callback(xhr.response);
            }
        };
        xhr.send(data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBS3RFO0lBV0ksMkJBQXFCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBVDFCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNqQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixhQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXhCLDRGQUE0RjtRQUM1RixrRUFBa0U7UUFDM0QsWUFBTyxHQUFXLE9BQU8sQ0FBQztJQUdyQyxDQUFDO0lBRU0scUNBQVMsR0FBaEI7UUFDWSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLDJDQUFlLEdBQXRCLFVBQXVCLFVBQW1CO1FBQzFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNaLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSwwQ0FBYyxHQUFyQixVQUFzQixTQUFpQjtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLHNDQUFVLEdBQWpCLFVBQWtCLElBQWMsRUFBRSxHQUFXLEVBQUUsTUFBYyxFQUFFLFFBQWtCO1FBQzdFLElBQUksR0FBRyxHQUFtQixJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQy9DLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUN2RCxHQUFHLENBQUMsa0JBQWtCLEdBQUc7WUFDckIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDeEMsUUFBUSxFQUFFLENBQUM7WUFDZixDQUFDO1FBRUwsQ0FBQyxDQUFBO1FBQ0csR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUUsdUNBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLE1BQWMsRUFBRSxJQUFTLEVBQUUsUUFBa0I7UUFFekUsSUFBSSxHQUFHLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7UUFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsa0JBQWtCLEdBQUc7WUFDckIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDeEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixDQUFDO1FBRUwsQ0FBQyxDQUFBO1FBQ0csR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUt2QixDQUFDO0lBRU0sd0NBQVksR0FBbkIsVUFBb0IsR0FBYTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFDcEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUE7SUFFakMsQ0FBQztJQXBGRDtRQUFDLGlCQUFVLEVBQUU7O3lCQUFBO0lBcUZiLHdCQUFDO0FBQUQsQ0FBQyxBQW5GRCxJQW1GQztBQW5GWSx5QkFBaUIsb0JBbUY3QixDQUFBIn0=