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
    GlobalHttpService.prototype.submitform = function (form, url) {
        var xhr = new XMLHttpRequest();
        var Imagesubmit = this.onImageSubmit;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("enctype", "multipart/form-data");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                Imagesubmit.emit();
            }
        };
        xhr.send(form);
    };
    GlobalHttpService.prototype.submitformloop = function (form, url) {
        var Imagesubmit = this.onImageSubmit;
        function request(form, url) {
            var xhr = new XMLHttpRequest();
            //let Imagesubmit = this.onImageSubmit;
            xhr.open("POST", url, true);
            xhr.setRequestHeader("enctype", "multipart/form-data");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                }
            };
            xhr.send(form);
        }
        for (var i = 0; i < 1000; i++) {
            request(form, url);
            if (i == 999) {
                Imagesubmit.emit();
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBS3RFO0lBT0ksMkJBQXFCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTDFCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFeEMsNEZBQTRGO1FBQzVGLGtFQUFrRTtRQUMzRCxZQUFPLEdBQVcsT0FBTyxDQUFDO0lBR3JDLENBQUM7SUFFTSxxQ0FBUyxHQUFoQjtRQUNZLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sMkNBQWUsR0FBdEIsVUFBdUIsVUFBbUI7UUFDMUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQ1osVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNwRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLDBDQUFjLEdBQXJCLFVBQXNCLFNBQWlCO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sc0NBQVUsR0FBakIsVUFBa0IsSUFBYyxFQUFFLEdBQVc7UUFDekMsSUFBSSxHQUFHLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7UUFDL0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNELEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztZQUN6QixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QixDQUFDO1FBRUQsQ0FBQyxDQUFBO1FBQ0csR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRU0sMENBQWMsR0FBckIsVUFBc0IsSUFBYyxFQUFFLEdBQVc7UUFDN0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6QyxpQkFBaUIsSUFBSSxFQUFFLEdBQUc7WUFDdEIsSUFBSSxHQUFHLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7WUFDL0MsdUNBQXVDO1lBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1QixHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUM7WUFDM0QsR0FBRyxDQUFDLGtCQUFrQixHQUFHO2dCQUN6QixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBRTdDLENBQUM7WUFFRCxDQUFDLENBQUE7WUFDRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5CLENBQUM7UUFDRCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBRXRCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ2IsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLENBQUM7UUFDRCxDQUFDO0lBR0QsQ0FBQztJQUVNLHdDQUFZLEdBQW5CLFVBQW9CLEdBQWE7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQ3BDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFBO0lBRWpDLENBQUM7SUFoRkQ7UUFBQyxpQkFBVSxFQUFFOzt5QkFBQTtJQWlGYix3QkFBQztBQUFELENBQUMsQUEvRUQsSUErRUM7QUEvRVkseUJBQWlCLG9CQStFN0IsQ0FBQSJ9