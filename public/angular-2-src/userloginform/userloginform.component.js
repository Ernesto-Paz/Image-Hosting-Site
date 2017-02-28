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
var http_service_1 = require('../services/http.service');
require('../rjs-observables');
var UserLoginFormComponent = (function () {
    function UserLoginFormComponent(globalhttp) {
        this.globalhttp = globalhttp;
        this.upload = {};
        this.modalopen = false;
        this.loggingin = false;
    }
    UserLoginFormComponent.prototype.ngOnInit = function () { };
    UserLoginFormComponent.prototype.ngOnDestroy = function () {
    };
    UserLoginFormComponent.prototype.toggleModal = function () {
        if (!this.loggingin) {
            this.modalopen = !this.modalopen;
        }
    };
    UserLoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loggingin = true;
        var form = this.uploadform.nativeElement;
        var loginform = new FormData(form);
        this.globalhttp.submitForm(loginform, "/users/login", "POST", function (res) {
            res = JSON.parse(res);
            console.log(res);
            _this.loggingin = false;
            if (res.login == true) {
                _this.toggleModal();
                console.log(res.login);
                _this.globalhttp.isUserLoggedIn = true;
                if (res.username) {
                    _this.globalhttp.username = res.username;
                }
            }
            else {
                _this.toggleModal();
            }
        });
        //this.globalhttp.postsingleimage()
    };
    Object.defineProperty(UserLoginFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.upload); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild("uploadform"), 
        __metadata('design:type', Object)
    ], UserLoginFormComponent.prototype, "uploadform", void 0);
    UserLoginFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'userloginform',
            templateUrl: 'userloginform.component.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.GlobalHttpService])
    ], UserLoginFormComponent);
    return UserLoginFormComponent;
}());
exports.UserLoginFormComponent = UserLoginFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmxvZ2luZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VybG9naW5mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRFLGVBQWUsQ0FBQyxDQUFBO0FBRTVGLDZCQUFnQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzNELFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQVE1QjtJQU1BLGdDQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUZqRCxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBR2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUdELHlDQUFRLEdBQVIsY0FBVyxDQUFDO0lBQ1osNENBQVcsR0FBWDtJQUNBLENBQUM7SUFFTSw0Q0FBVyxHQUFsQjtRQUVJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFFaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFckMsQ0FBQztJQUVMLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBd0JDO1FBdkJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksU0FBUyxHQUFjLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQUMsR0FBRztZQUM5RCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztvQkFDYixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxDQUFDO1lBQ0wsQ0FBQztZQUNULElBQUksQ0FBQSxDQUFDO2dCQUVELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUd2QixDQUFDO1FBQ0csQ0FBQyxDQUFDLENBQUM7UUFDSCxtQ0FBbUM7SUFDdkMsQ0FBQztJQUVELHNCQUFJLDhDQUFVO2FBQWQsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFqRHhEO1FBQUMsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7OzhEQUFBO0lBVHhCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixRQUFRLEVBQUUsZUFBZTtZQUN0QixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7OzhCQUFBO0lBd0RGLDZCQUFDO0FBQUQsQ0FBQyxBQXRERCxJQXNEQztBQXREWSw4QkFBc0IseUJBc0RsQyxDQUFBIn0=