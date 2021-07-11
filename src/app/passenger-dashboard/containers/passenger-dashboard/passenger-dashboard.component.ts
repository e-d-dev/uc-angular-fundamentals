import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    templateUrl: 'passenger-dashboard.html'
})

export class PassengerDashboarComponent implements OnInit {
    passengers: Passenger[] | undefined;
    constructor(private passengerService: PassengerDashboardService) { }
    ngOnInit(): void {
        this.passengerService.getPassengers().subscribe((data: Passenger[]) => this.passengers = data, (error) => console.log(error));

        // if used with a promise
        // this.passengerService.getPassengers().then((data: Passenger[]) => this.passengers = data);
    }

    handleEdit(event: Passenger): void {
        this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers?.map((passenger: Passenger) => {
                    if (passenger.id === event.id) {
                        passenger = Object.assign({}, passenger, event);
                    }
                    return passenger;
                });
            });
    }
    handleRemove(event: Passenger): void {
        this.passengerService
            .removePassenger(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers?.filter((passenger: Passenger) => {
                    return passenger.id !== event.id;
                });
            });
    }
}
