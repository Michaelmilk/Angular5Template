import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

//import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { BaseComponent } from "./components/common/base.component";
import '../assets/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {
    private sub: any;

    constructor(//private slimLoader: SlimLoadingBarService, 
        private router: Router) {
        super();
    }

    ngOnInit() {
        //this.startLoading(); 
        // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart) {
                // this.slimLoader.start();
            } else if (event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError) {
                //this.slimLoader.complete();
            }
        }, (error: any) => {
            //this.slimLoader.complete();
        });
    }

    ngOnDestroy(): any {
        this.sub.unsubscribe();
    }

    // startLoading() {
    //     this.slimLoader.start(() => {
    //         this.logger.info('Loading complete');
    //     });
    // }

    // stopLoading() {
    //     this.slimLoader.stop();
    // }

    // completeLoading() {
    //     this.slimLoader.complete();
    // }
}
