import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//ngModel
import { Ng2Webstorage } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './components/trivial/pageNotFound.component';
import { Constants } from './core/common/constants';
import { environment } from '../../config/environment/environment';
import { Logger } from './helper/logger';
import { DashboardModule } from './components/dashboard/dashboard.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        Ng2Webstorage,
        DashboardModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    providers: [
        Logger,
        { provide: 'loggerName', useValue: Constants.loggerName },
        { provide: 'loggerLevel', useValue: environment.logLevel },
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
