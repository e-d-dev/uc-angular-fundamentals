import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    templateUrl: 'passenger-viewer.html'
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger | undefined;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService
    ) { }

    ngOnInit(): void {
        this.route.params.pipe(
             // in the video he switches the type in switchMap from Params to Passenger ... but here it errors
            switchMap((data: Params) => this.passengerService.getPassenger(data.id)))
            .subscribe((data: Passenger) => this.passenger = data);
    }

    onUpdatePassenger(event: Passenger): void {
        this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
            this.passenger = Object.assign({}, this.passenger, event);
        });
    }

    goBack(): void {
        this.router.navigate(['/passengers']);
    }
}
