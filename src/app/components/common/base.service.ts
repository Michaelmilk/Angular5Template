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

import{ environment } from "../../../../config/environment/environment"
import { BaseComponent } from './base.component';

// @Component({
//     selector: 'app-name',
//     templateUrl: './name.component.html',
//     styleUrls: ['./name.component.scss']
// })

export class BaseService extends BaseComponent implements OnInit {
    serverUrl: string = environment.serverBaseUrl;
    entityPlatformServiceUrl = `${this.serverUrl}/EntityPlatform`;
    
    
	constructor(public httpClient: HttpClient) {
		super();
	}

    ngOnInit() { }

    getCustomerIds() {
		return this.httpClient.get<Array<string>>(
			`${this.entityPlatformServiceUrl}/allCustomerIdNames`, {}
		); 
    }

    getCustomerEnvs(customerId: string) {
        const httpParams = new HttpParams()
			.set("customerId", customerId);
		this.logger.info(httpParams.toString());
		return this.httpClient.get<Array<string>>(
			`${this.entityPlatformServiceUrl}/allCustomerEnvNames`,
			{
				params: httpParams
			}
		); 
    }

    getEntitySpaces(customerId: string, customerEnv: string) {
        const httpParams = new HttpParams()
			.set("customerId", customerId)
			.set("customerEnv", customerEnv);
		this.logger.info(httpParams.toString());
		return this.httpClient.get<Array<string>>(
			`${this.entityPlatformServiceUrl}/allEntitySpaceNames`,
			{
				params: httpParams
			}
		);
    }

    getEntitySpaceViews(customerId: string, customerEnv: string, entitySpace: string) {
        const httpParams = new HttpParams()
			.set("customerId", customerId)
			.set("customerEnv", customerEnv)
			.set("entitySpaceName", entitySpace);
		this.logger.info(httpParams.toString());
		return this.httpClient.get<Array<string>>(
			`${this.entityPlatformServiceUrl}/allEntitySpaceViewNames`,
			{
				params: httpParams
			}
		);
    }
}