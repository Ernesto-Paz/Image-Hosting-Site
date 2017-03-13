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
var router_1 = require("@angular/router");
var homepage_component_1 = require('./homepage/homepage.component');
var soloimagepage_component_1 = require("./soloimagepage/soloimagepage.component");
var userpage_component_1 = require("./userpage/userpage.component");
var appRoutes = router_1.RouterModule.forRoot([
    { path: '', component: homepage_component_1.HomepageComponent },
    { path: 'user/:id', component: userpage_component_1.UserPageComponent },
    { path: ':id', component: soloimagepage_component_1.SoloImagePageComponent }
]);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [appRoutes],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsbUNBQW1DLCtCQUErQixDQUFDLENBQUE7QUFDbkUsd0NBQXVDLHlDQUF5QyxDQUFDLENBQUE7QUFDakYsbUNBQWtDLCtCQUErQixDQUFDLENBQUE7QUFFbEUsSUFBTSxTQUFTLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUM7SUFDbkMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFPLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtJQUMvQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUU7Q0FDckQsQ0FBQyxDQUFDO0FBT0g7SUFBQTtJQUErQixDQUFDO0lBTDVCO1FBQUMsZUFBUSxDQUFDO1lBQ2QsT0FBTyxFQUFFLENBQUUsU0FBUyxDQUFFO1lBQ3RCLE9BQU8sRUFBRSxDQUFFLHFCQUFZLENBQUU7U0FDaEIsQ0FBQzs7d0JBQUE7SUFFcUIsdUJBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDO0FBQW5CLHdCQUFnQixtQkFBRyxDQUFBIn0=