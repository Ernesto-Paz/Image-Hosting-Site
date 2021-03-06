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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require("./app/app.component");
var imgthumbnail_component_1 = require('./imgthumbnail/imgthumbnail.component');
var http_service_1 = require('./services/http.service');
var homepage_component_1 = require('./homepage/homepage.component');
var soloimagepage_component_1 = require("./soloimagepage/soloimagepage.component");
var imgsubmitform_component_1 = require("./imgsubmitform/imgsubmitform.component");
var userregistrationform_component_1 = require("./userregistrationform/userregistrationform.component");
var navbar_component_1 = require("./navbar/navbar.component");
var userloginform_component_1 = require("./userloginform/userloginform.component");
var userpage_component_1 = require("./userpage/userpage.component");
var app_routing_module_1 = require("./app.routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule],
            declarations: [homepage_component_1.HomepageComponent, imgthumbnail_component_1.ImgThumbnailComponent, app_component_1.AppComponent, soloimagepage_component_1.SoloImagePageComponent, imgsubmitform_component_1.ImgSubmitFormComponent, userregistrationform_component_1.UserRegistrationFormComponent, userloginform_component_1.UserLoginFormComponent, navbar_component_1.NavBarComponent, userpage_component_1.UserPageComponent],
            providers: [http_service_1.GlobalHttpService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2QyxpQ0FBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUV4RCxzQkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsOEJBQTZCLHFCQUFxQixDQUFDLENBQUE7QUFDbkQsdUNBQXNDLHVDQUF1QyxDQUFDLENBQUE7QUFDOUUsNkJBQW1DLHlCQUF5QixDQUFDLENBQUE7QUFDN0QsbUNBQW1DLCtCQUErQixDQUFDLENBQUE7QUFDbkUsd0NBQXVDLHlDQUF5QyxDQUFDLENBQUE7QUFDakYsd0NBQXVDLHlDQUF5QyxDQUFDLENBQUE7QUFDakYsK0NBQThDLHVEQUF1RCxDQUFDLENBQUE7QUFDdEcsaUNBQWdDLDJCQUEyQixDQUFDLENBQUE7QUFDNUQsd0NBQXVDLHlDQUF5QyxDQUFDLENBQUE7QUFDakYsbUNBQWlDLCtCQUErQixDQUFDLENBQUE7QUFFakUsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFTeEQ7SUFBQTtJQUF5QixDQUFDO0lBTjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUUsZ0NBQWEsRUFBRSxpQkFBVSxFQUFFLHFDQUFnQixFQUFFLG1CQUFXLENBQUU7WUFDckUsWUFBWSxFQUFFLENBQUUsc0NBQWlCLEVBQUUsOENBQXFCLEVBQUUsNEJBQVksRUFBRSxnREFBc0IsRUFBRSxnREFBc0IsRUFBRSw4REFBNkIsRUFBRSxnREFBc0IsRUFBRSxrQ0FBZSxFQUFFLHNDQUFpQixDQUFDO1lBQ2xOLFNBQVMsRUFBRSxDQUFFLGdDQUFpQixDQUFFO1lBQ2hDLFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7U0FDNUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsaUJBQVMsWUFBSSxDQUFBIn0=