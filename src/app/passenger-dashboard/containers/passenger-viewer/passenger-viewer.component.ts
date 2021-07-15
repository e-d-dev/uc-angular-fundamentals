import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    templateUrl: 'passenger-viewer.html'
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger | undefined;
    constructor(private passengerService: PassengerDashboardService) { }

    ngOnInit(): void {
        this.passengerService
            .getPassenger(1)
            .subscribe((data: Passenger) => this.passenger = data);
    }
}