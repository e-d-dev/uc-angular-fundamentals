import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // angular modules
        BrowserModule,
        CommonModule,
        // FormsModule

        // custom modules
        PassengerDashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
