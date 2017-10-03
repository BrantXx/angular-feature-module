import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    { type: Component, args: [{
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [HeaderComponent, ParagraphComponent],
                exports: [HeaderComponent, ParagraphComponent]
            },] },
];
/**
 * @nocollapse
 */
FeatureModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { FeatureModule, HeaderComponent as ɵa, ParagraphComponent as ɵb };
//# sourceMappingURL=angular-feature-module.es5.js.map
