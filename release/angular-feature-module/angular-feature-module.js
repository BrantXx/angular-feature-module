import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class HeaderComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'header',
                template: `
      <h1>
      	<ng-content></ng-content>
      </h1>
    `,
                styles: [`
      h1{
      	color: red;
      }
    `]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = () => [];

class FeatureModule {
}
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
FeatureModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureModule, HeaderComponent as ɵa };
//# sourceMappingURL=angular-feature-module.js.map
