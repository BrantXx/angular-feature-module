import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [HeaderComponent, ParagraphComponent],
    exports: [HeaderComponent, ParagraphComponent]
})
export class FeatureModule { }
