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
var http_service_1 = require("../services/http.service");
var NavBarComponent = (function () {
    function NavBarComponent(globalhttp) {
        this.globalhttp = globalhttp;
    }
    NavBarComponent.prototype.onSubmit = function () {
        var _this = this;
        var form = this.navbar.nativeElement;
        console.log(form);
        var loginform = new FormData(form);
        this.globalhttp.submitform(loginform, "/users/login", "POST", function (res) {
            res = JSON.parse(res);
            console.log(res);
            if (res.login = true) {
                _this.globalhttp.isUserLoggedIn = true;
                if (res.username) {
                    _this.globalhttp.username = res.username;
                }
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild("navbar"), 
        __metadata('design:type', Object)
    ], NavBarComponent.prototype, "navbar", void 0);
    NavBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "navbar",
            templateUrl: "./navbar.component.html"
        }), 
        __metadata('design:paramtypes', [http_service_1.GlobalHttpService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxQyxlQUFlLENBQUMsQ0FBQTtBQUNyRCw2QkFBa0MsMEJBQTBCLENBQUMsQ0FBQTtBQVU3RDtJQUVBLHlCQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUlqRCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksU0FBUyxHQUFjLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQUMsR0FBRztZQUVsRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztvQkFDYixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxDQUFDO1lBQ0wsQ0FBQztZQUNMLElBQUksQ0FBQSxDQUFDO1lBSUwsQ0FBQztRQUNHLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTNCRztRQUFDLGdCQUFTLENBQUMsUUFBUSxDQUFDOzttREFBQTtJQVBwQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFDLHlCQUF5QjtTQUNwQyxDQUFDOzt1QkFBQTtJQWdDVixzQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QlksdUJBQWUsa0JBOEIzQixDQUFBIn0=