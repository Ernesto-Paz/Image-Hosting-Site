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
var UserPageComponent = (function () {
    function UserPageComponent(router, route, globalhttp) {
        this.router = router;
        this.route = route;
        this.globalhttp = globalhttp;
        this.userInfo = {};
        this.params = {};
    }
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.params.username = params["username"];
            _this.globalhttp.sendRequest("/api/user/" + _this.params.username, "GET", null, function (res) {
                _this.userInfo = res;
                console.log(res);
                //do things here
            });
        });
    };
    UserPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "userpage",
            templateUrl: "./userpage.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, http_service_1.GlobalHttpService])
    ], UserPageComponent);
    return UserPageComponent;
}());
exports.UserPageComponent = UserPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcnBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsNkJBQWtDLDBCQUEwQixDQUFDLENBQUE7QUFRN0Q7SUFDQSwyQkFBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQVUsVUFBNkI7UUFBcEYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFLeEcsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQVEsRUFBRSxDQUFDO0lBSGpCLENBQUM7SUFPRCxvQ0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBYztZQUMvQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFL0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUVqRixLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsZ0JBQWdCO1lBRWhCLENBQUMsQ0FBQyxDQUFDO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFJVixDQUFDO0lBakNHO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1NBQ3ZDLENBQUM7O3lCQUFBO0lBbUNWLHdCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSx5QkFBaUIsb0JBaUM3QixDQUFBIn0=