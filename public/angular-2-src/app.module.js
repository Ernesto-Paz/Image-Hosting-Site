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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var basetemplate_component_1 = require("./basetemplate/basetemplate.component");
var homepage_component_1 = require('./homepage/homepage.component');
var imgthumbnail_component_1 = require('./imgthumbnail/imgthumbnail.component');
var soloimagepage_component_1 = require("./soloimagepage/soloimagepage.component");
var http_service_1 = require('./services/http.service');
var appRoutes = router_1.RouterModule.forRoot([
    { path: '', component: homepage_component_1.HomepageComponent },
    { path: ':id', component: soloimagepage_component_1.SoloImagePageComponent }
]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, appRoutes],
            declarations: [homepage_component_1.HomepageComponent, imgthumbnail_component_1.ImgThumbnailComponent, basetemplate_component_1.BaseTemplateComponent, soloimagepage_component_1.SoloImagePageComponent],
            providers: [http_service_1.GlobalHttpService],
            bootstrap: [basetemplate_component_1.BaseTemplateComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2QyxpQ0FBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN4RCx1QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsdUNBQXNDLHVDQUF1QyxDQUFDLENBQUE7QUFDOUUsbUNBQW1DLCtCQUErQixDQUFDLENBQUE7QUFDbkUsdUNBQXNDLHVDQUF1QyxDQUFDLENBQUE7QUFDOUUsd0NBQXVDLHlDQUF5QyxDQUFDLENBQUE7QUFDakYsNkJBQW1DLHlCQUF5QixDQUFDLENBQUE7QUFFN0QsSUFBTSxTQUFTLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUM7SUFDbkMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFPLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUMvQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGdEQUFzQixFQUFFO0NBQ3JELENBQUMsQ0FBQztBQVNIO0lBQUE7SUFBeUIsQ0FBQztJQU4xQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFFLGdDQUFhLEVBQUUsaUJBQVUsRUFBRSxTQUFTLENBQUM7WUFDaEQsWUFBWSxFQUFFLENBQUUsc0NBQWlCLEVBQUUsOENBQXFCLEVBQUUsOENBQXFCLEVBQUUsZ0RBQXNCLENBQUM7WUFDeEcsU0FBUyxFQUFFLENBQUMsZ0NBQWlCLENBQUM7WUFDOUIsU0FBUyxFQUFFLENBQUUsOENBQXFCLENBQUU7U0FDckMsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsaUJBQVMsWUFBSSxDQUFBIn0=