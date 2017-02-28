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
var UserRegistrationFormComponent = (function () {
    function UserRegistrationFormComponent(globalhttp) {
        this.globalhttp = globalhttp;
        this.upload = {};
        this.modalopen = false;
        this.registering = false;
    }
    UserRegistrationFormComponent.prototype.ngOnInit = function () { };
    UserRegistrationFormComponent.prototype.ngOnDestroy = function () {
    };
    UserRegistrationFormComponent.prototype.toggleModal = function () {
        if (!this.registering) {
            this.modalopen = !this.modalopen;
        }
    };
    UserRegistrationFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registering = true;
        var form = this.uploadform.nativeElement;
        var registrationform = new FormData(form);
        this.globalhttp.submitForm(registrationform, "/users/registernewuser", "POST", function () { _this.registering = false; _this.toggleModal(); });
        //this.globalhttp.postsingleimage()
    };
    Object.defineProperty(UserRegistrationFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.upload); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild("uploadform"), 
        __metadata('design:type', Object)
    ], UserRegistrationFormComponent.prototype, "uploadform", void 0);
    UserRegistrationFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'userregistrationform',
            templateUrl: 'userregistrationform.component.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.GlobalHttpService])
    ], UserRegistrationFormComponent);
    return UserRegistrationFormComponent;
}());
exports.UserRegistrationFormComponent = UserRegistrationFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnJlZ2lzdHJhdGlvbmZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcnJlZ2lzdHJhdGlvbmZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEUsZUFBZSxDQUFDLENBQUE7QUFFNUYsNkJBQWdDLDBCQUEwQixDQUFDLENBQUE7QUFDM0QsUUFBTyxvQkFBb0IsQ0FBQyxDQUFBO0FBUTVCO0lBTUEsdUNBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBRmpELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFHYixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBR0QsZ0RBQVEsR0FBUixjQUFXLENBQUM7SUFDWixtREFBVyxHQUFYO0lBQ0EsQ0FBQztJQUVNLG1EQUFXLEdBQWxCO1FBRUksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUVsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVyQyxDQUFDO0lBRUwsQ0FBQztJQUVELGdEQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksZ0JBQWdCLEdBQWMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLGNBQU0sS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUNySSxtQ0FBbUM7SUFDdkMsQ0FBQztJQUVELHNCQUFJLHFEQUFVO2FBQWQsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUEvQnhEO1FBQUMsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7O3FFQUFBO0lBVHhCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixRQUFRLEVBQUUsc0JBQXNCO1lBQzdCLFdBQVcsRUFBRSxxQ0FBcUM7U0FDckQsQ0FBQzs7cUNBQUE7SUFzQ0Ysb0NBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLHFDQUE2QixnQ0FvQ3pDLENBQUEifQ==