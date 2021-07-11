import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Passenger } from '../passenger-dashboard/models/passenger.interface';

// const PASSENGER_API: string = '/api/passengers';
const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient) {
    }

    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .pipe(
                map((response: any) => response),
                catchError((error) => {
                    throw new Error('Error in source. Details: ' + error);
                })
            );
    }

    /**
     * also works with a promise
     * in the component it's not a subscription, you have to use .then in the component
     */
    // getPassengers(): Promise<Passenger[]> {
    //     return this.http
    //         .get(PASSENGER_API)
    //         .toPromise()
    //         .then((response: any) => response);
    // }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        // example of custom headers
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger, httpOptions) // custom headers are appended in the put request as options
            .pipe(
                map((response: any) => response)
            );
    }

    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`)
            .pipe(
                map((response: any) => response)
            );
    }
}
