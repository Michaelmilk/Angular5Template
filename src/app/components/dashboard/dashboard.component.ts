import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../common/base.component';

@Component({
    selector: 'selector',
    templateUrl: './dashboard.component.html',
    //styleUrls: ['./name.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {
        //this.logger.info(experimentDtos);
        //this.experimentDtos = experimentDtos;        
    }

    test() {
        //this.logger.info(experimentDtos);
    }
}