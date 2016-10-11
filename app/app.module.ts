import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {OperatorModule}  from './operator/operator.module';

@NgModule({
    imports: [BrowserModule, OperatorModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
