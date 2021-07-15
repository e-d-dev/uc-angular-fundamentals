import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    templateUrl: 'passenger-form.html'
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger | undefined;
    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn && this.detail) {
            this.detail.checkInDate = Date.now();
        }
    }
}