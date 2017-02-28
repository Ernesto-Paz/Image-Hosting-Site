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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxQyxlQUFlLENBQUMsQ0FBQTtBQUNyRCw2QkFBa0MsMEJBQTBCLENBQUMsQ0FBQTtBQVc3RDtJQUVBLHlCQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUlqRCxDQUFDO0lBTEc7UUFBQyxnQkFBUyxDQUFDLFFBQVEsQ0FBQzs7bURBQUE7SUFQcEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBQyx5QkFBeUI7U0FDcEMsQ0FBQzs7dUJBQUE7SUFXVixzQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksdUJBQWUsa0JBUzNCLENBQUEifQ==