import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {OperatorModule}  from './operator/operator.module';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {Component} from "@angular/core";
@Component({
    template: `empty`
})
export class Empty {
}


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot([
        {
            path: '',
            redirectTo: '/init',
            pathMatch: 'full'
        },
        {
            path: 'init',
            component: Empty,
        },
        {
            path: 'operators',
            loadChildren: 'app/operator/operator.module#OperatorModule',
        },

    ], {useHash: true})],
    declarations: [AppComponent, Empty],
    bootstrap: [AppComponent]
})
export class AppModule {
}

