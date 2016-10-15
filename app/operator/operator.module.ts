import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {OperatorList}  from './operator-list.component';
import {OperatorService}  from './operator.service';
import {HttpModule} from "@angular/http";
import {OperatorDetails} from "./operator-details.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule,
        RouterModule.forRoot([
            {
                path: 'operators',
                component: OperatorList
            },
            {
                path: 'operators/:id',
                component: OperatorDetails
            }
        ], {useHash: true})],
    providers: [OperatorService],
    declarations: [OperatorList, OperatorDetails],
    exports: [OperatorList]
})
export class OperatorModule {
}
