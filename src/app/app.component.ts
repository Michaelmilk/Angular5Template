import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { BaseComponent } from "./components/common/base.component";
import { Logger } from "./helper/logger";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {

    constructor(public logger: Logger) {
        super(logger);
    }

    ngOnInit() {
    }

    ngOnDestroy(): any {
    }
}
