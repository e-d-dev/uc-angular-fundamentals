import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
// import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { AppComponent } from './app.component';


const routes: Routes = [
    { path: '', redirectTo: 'passengers', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
    ],
    imports: [
        // angular modules
        BrowserModule,
        CommonModule,

        /**
         * useHash: true adds # to the URL; supports older browsers; uses a history API
         * benefit of using the normal mode (not useHash:true) is that we can server side render
         * where the push location strategy API ist used, which uses the history.pushstate HTML5 API
         */
        // RouterModule.forRoot(routes, { useHash: true }),

        RouterModule.forRoot(routes),
        // FormsModule

        // custom modules
        PassengerDashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
