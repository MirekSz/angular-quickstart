import {NgModule}      from '@angular/core';

import {OperatorList}  from './operator-list.component';
import {OperatorService}  from './operator.service';
import {HttpModule} from "@angular/http";
import {OperatorDetails} from "./operator-details.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: OperatorList,
                children: []
            },
            {
                path: ':id',
                component: OperatorDetails,
                children: []
            }

        ])],
    providers: [OperatorService],
    declarations: [OperatorList, OperatorDetails],
    exports: [OperatorList]
})
export class OperatorModule {
}
