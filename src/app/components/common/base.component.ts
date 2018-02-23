import { Component, OnInit } from '@angular/core';
import {
    HttpClient,
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpParams,
    HttpHeaders,
    HttpResponse
} from "@angular/common/http";

import { Logger } from '../../helper/logger';

// @Component({
//     selector: 'app-name',
//     templateUrl: './name.component.html',
//     styleUrls: ['./name.component.scss']
// })

export class BaseComponent implements OnInit {
    logger: Logger = new Logger("onboardingToolLogger");
    constructor() { }

    ngOnInit() { }
}