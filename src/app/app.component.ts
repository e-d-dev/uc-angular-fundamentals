import { Component } from '@angular/core';

interface Nav {
    link: string;
    name: string;
    exact: boolean;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // title: string;
    // numberOne: number = 1;
    // numberTwo: number = 2;
    // isHappy: boolean = false;
    // logo: string = 'assets/example_image.png';
    // name: string = '';
    // re. dates __________________________________________________________________
    // dateFromAPI = '2016-01-02T12:30:00Z';
    // localDate = new Date(this.dateFromAPI);
    // localDateString = this.localDate.toLocaleDateString(undefined, {day: '2-digit', month: '2-digit', year: 'numeric'});
    // ____________________________________________________________________________

    // handleChange(value: string): void {
    //     this.name = value;
    // }

    nav: Nav[] = [
        {
            link: '/',
            name: 'Home',
            exact: true
        },
        {
            link: '/passengers',
            name: 'Passengers',
            exact: true
        },
        {
            link: '/oops',
            name: '404',
            exact: false
        },
    ];

    constructor() {
        // this.title = 'uc-app';
    }
}
