import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// containers
import { PassengerDashboarComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// sevices
import { PassengerDashboardService } from './passenger-dashboard.service';

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
        FormsModule
    ],
    exports: [
        PassengerViewerComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {
    //
}
