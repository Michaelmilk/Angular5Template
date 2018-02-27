import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../common/base.component";
import { DashboardService } from "./dashboard.service";
import { Logger } from "../../helper/logger";
import { Constants } from "../../core/common/constants";
import { LocalStorageService, SessionStorageService } from "ngx-webstorage";

@Component({
	selector: "dashboard",
	templateUrl: "./dashboard.component.html"
})
export class DashboardComponent extends BaseComponent implements OnInit {
	constructor(
		public logger: Logger,
        private localSt: LocalStorageService,
        private DashboardService: DashboardService
	) {
		super(logger);
	}

	ngOnInit() {
		
	}
}