import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {OperatorList}  from './operator-list.component';
import {OperatorService}  from './operator.service';

@NgModule({
    imports: [BrowserModule],
    providers: [OperatorService],
    declarations: [OperatorList],
    exports: [OperatorList]
})
export class OperatorModule {
}
