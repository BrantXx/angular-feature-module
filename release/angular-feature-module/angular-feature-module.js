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
                selector: 'feat-header',
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

class ParagraphComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ParagraphComponent.decorators = [
    { type: Component, args: [{
                selector: 'feat-paragraph',
                template: `
      <p>
      	<ng-content></ng-content>
      </p>
    `,
                styles: [`
      p{
      	color: lime;
      }
    `]
            },] },
];
/**
 * @nocollapse
 */
ParagraphComponent.ctorParameters = () => [];

class FeatureModule {
}
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
FeatureModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureModule, HeaderComponent as ɵa, ParagraphComponent as ɵb };
//# sourceMappingURL=angular-feature-module.js.map
