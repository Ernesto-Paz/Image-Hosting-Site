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
        this.fileId = "";
        this.voting = false;
        this.userVote = { up: null, down: null };
        this.upvote = { vote: true };
        this.downvote = { vote: false };
    }
    SoloImagePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.params);
        this.params = this.route.params.subscribe(function (params) {
            _this.fileId = params["id"];
            console.log(_this.fileId);
        });
        this.getsingleimage();
    };
    SoloImagePageComponent.prototype.ngOnDestroy = function () {
        this.params.unsubscribe();
    };
    SoloImagePageComponent.prototype.getsingleimage = function () {
        var _this = this;
        this.globalhttp.getsingleimage(this.fileId).subscribe(function (res) { return _this.image = res; }, function (error) { return console.log(error); }, function () {
            if (_this.image) {
                console.log(_this.image);
                _this.updateArrow();
                console.log("Done getting image info");
                console.log(_this.image);
            }
            else {
            }
        });
    };
    SoloImagePageComponent.prototype.updateArrow = function () {
        console.log("Updating Arrow");
        if (this.image.uservote) {
            if (this.image.uservote === 1) {
                this.userVote.up = true;
                this.userVote.down = false;
            }
            else if (this.image.uservote === -1) {
                this.userVote.up = false;
                this.userVote.down = true;
            }
            else if (this.image.uservote === 0) {
                this.userVote.up = false;
                this.userVote.down = false;
            }
        }
        else {
            this.userVote.up = false;
            this.userVote.down = false;
        }
    };
    SoloImagePageComponent.prototype.vote = function (data) {
        var _this = this;
        var imagekey = this.image.key;
        if (data === "upvotearrow") {
            data = { vote: true };
        }
        else {
            data = { vote: false };
        }
        //check if user has already voted.
        if (this.image.uservote) {
            if (data.vote === true && this.image.uservote === 1) {
                console.log("nulled up");
                data.vote = null;
            }
            else if (data.vote === false && this.image.uservote === -1) {
                console.log("nulled down");
                data.vote = null;
            }
        }
        //check if voting is in progress
        if (this.voting) {
            return;
        }
        else {
            this.voting = true;
        }
        this.globalhttp.postRequestObservable("/api/submitvote/" + imagekey, data).subscribe(function (res) { console.log("Got response!"); }, function (error) { console.log("got an error"); console.log(error); _this.voting = false; }, function () {
            _this.voting = false;
            console.log("Callback from vote post.");
            _this.globalhttp.sendRequest("/api/" + _this.fileId, "GET", {}, function (res) {
                console.log(res);
                _this.image = res;
                _this.updateArrow();
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sb2ltYWdlcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzb2xvaW1hZ2VwYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1ELGVBQWUsQ0FBQyxDQUFBO0FBQ25FLHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLDZCQUFrQywwQkFBMEIsQ0FBQyxDQUFBO0FBUTdEO0lBQ0EsZ0NBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUFVLFVBQTZCO1FBQXBGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBR2pHLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFFcEIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixhQUFRLEdBQVEsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUN2QyxXQUFNLEdBQVEsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDM0IsYUFBUSxHQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO0lBTnJDLENBQUM7SUFRRCx5Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQ3JELEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFF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