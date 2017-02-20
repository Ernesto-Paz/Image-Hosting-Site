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
var NavBarUserLoginFormComponent = (function () {
    function NavBarUserLoginFormComponent(globalhttp) {
        this.globalhttp = globalhttp;
    }
    NavBarUserLoginFormComponent.prototype.onSubmit = function () {
        var form = this.navbaruserloginform.nativeElement;
        console.log(form);
        var loginform = new FormData(form);
        this.globalhttp.submitform(loginform, "/users/registernewuser", "POST", function () { });
    };
    __decorate([
        core_1.ViewChild("navbaruserloginform"), 
        __metadata('design:type', Object)
    ], NavBarUserLoginFormComponent.prototype, "navbaruserloginform", void 0);
    NavBarUserLoginFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "navbaruserloginform",
            templateUrl: "./navbaruserloginform.component.html"
        }), 
        __metadata('design:paramtypes', [http_service_1.GlobalHttpService])
    ], NavBarUserLoginFormComponent);
    return NavBarUserLoginFormComponent;
}());
exports.NavBarUserLoginFormComponent = NavBarUserLoginFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFydXNlcmxvZ2luZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZiYXJ1c2VybG9naW5mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3JELDZCQUFrQywwQkFBMEIsQ0FBQyxDQUFBO0FBUTdEO0lBRUEsc0NBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO0lBSWpELENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksU0FBUyxHQUFjLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsY0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDaEgsQ0FBQztJQVpHO1FBQUMsZ0JBQVMsQ0FBQyxxQkFBcUIsQ0FBQzs7NkVBQUE7SUFQakM7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFDLHNDQUFzQztTQUNqRCxDQUFDOztvQ0FBQTtJQWlCVixtQ0FBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksb0NBQTRCLCtCQWV4QyxDQUFBIn0=