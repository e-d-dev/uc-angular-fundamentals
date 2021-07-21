import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { PassengerDashboarComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// sevices
import { PassengerDashboardService } from './passenger-dashboard.service';

const routes: Routes = [
    {
        path: 'passengers',
        children: [
            { path: '', component: PassengerDashboarComponent },
            { path: ':id', component: PassengerViewerComponent }
        ]
    }
];

@NgModule({
    // declarations hold all of the components relative to this module
    declarations: [
        // container components (smart, statefull)
        PassengerDashboarComponent,
        PassengerViewerComponent,
        // generic components (dumb, stateless)
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],

    /**
     * because routing is used, exports is not needed to be used
     * the component will be exported and merged in with the routing definition
     * everything gets pulled in to the root module, which is why these are called 'forChild'
     */
    // exports: [
    //     PassengerViewerComponent
    // ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {
    //
}
