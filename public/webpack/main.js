webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// The browser platform with a compiler
	const platform_browser_dynamic_1 = __webpack_require__(1);
	// The app module
	const app_module_1 = __webpack_require__(23);
	// Compile and launch the module
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

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
	const core_1 = __webpack_require__(3);
	const platform_browser_1 = __webpack_require__(21);
	const example_component_1 = __webpack_require__(24);
	let AppModule = class AppModule {
	};
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule],
	        declarations: [example_component_1.ExampleComponent],
	        bootstrap: [example_component_1.ExampleComponent]
	    }), 
	    __metadata('design:paramtypes', [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

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
	const core_1 = __webpack_require__(3);
	let ExampleComponent = class ExampleComponent {
	};
	ExampleComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(25)
	    }), 
	    __metadata('design:paramtypes', [])
	], ExampleComponent);
	exports.ExampleComponent = ExampleComponent;


/***/ },

/***/ 25:
/***/ function(module, exports) {

	module.exports = "<p>Yes this is working!</p>";

/***/ }

});
//# sourceMappingURL=main.js.map