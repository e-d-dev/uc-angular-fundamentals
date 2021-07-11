import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// containers
import { PassengerDashboarComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

// components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// sevices
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
    declarations: [
    // declarations hold all of the components relative to this module
    PassengerDashboarComponent,
    PassengerCountComponent,
    PassengerDetailComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        PassengerDashboarComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {
    //
}
