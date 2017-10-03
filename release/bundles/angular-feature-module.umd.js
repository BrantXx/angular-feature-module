(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['angular-feature-module'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'feat-header',
                template: "\n      <h1>\n      \t<ng-content></ng-content>\n      </h1>\n    ",
                styles: ["\n      h1{\n      \tcolor: red;\n      }\n    "]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = function () { return []; };
var ParagraphComponent = (function () {
    function ParagraphComponent() {
    }
    /**
     * @return {?}
     */
    ParagraphComponent.prototype.ngOnInit = function () {
    };
    return ParagraphComponent;
}());
ParagraphComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'feat-paragraph',
                template: "\n      <p>\n      \t<ng-content></ng-content>\n      </p>\n    ",
                styles: ["\n      p{\n      \tcolor: lime;\n      }\n    "]
            },] },
];
/**
 * @nocollapse
 */
ParagraphComponent.ctorParameters = function () { return []; };
var FeatureModule = (function () {
    function FeatureModule() {
    }
    return FeatureModule;
}());
FeatureModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [HeaderComponent, ParagraphComponent],
                exports: [HeaderComponent, ParagraphComponent]
            },] },
];
/**
 * @nocollapse
 */
FeatureModule.ctorParameters = function () { return []; };

exports.FeatureModule = FeatureModule;
exports.ɵa = HeaderComponent;
exports.ɵb = ParagraphComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-feature-module.umd.js.map
