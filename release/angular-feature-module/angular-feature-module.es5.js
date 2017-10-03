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
                selector: 'header',
                template: "\n      <h1>\n      \t<ng-content></ng-content>\n      </h1>\n    ",
                styles: ["\n      h1{\n      \tcolor: red;\n      }\n    "]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = function () { return []; };
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
                declarations: [HeaderComponent],
                exports: [HeaderComponent]
            },] },
];
/**
 * @nocollapse
 */
FeatureModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { FeatureModule, HeaderComponent as ɵa };
//# sourceMappingURL=angular-feature-module.es5.js.map
