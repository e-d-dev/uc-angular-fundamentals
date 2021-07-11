import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    templateUrl: 'passenger-detail.component.html',
    styleUrls: ['passenger-detail.component.scss']
})

export class PassengerDetailComponent implements OnChanges, OnInit {

    @Input() detail: Passenger | undefined;
    @Output() edit: EventEmitter<any> = new EventEmitter();
    @Output() remove: EventEmitter<any> = new EventEmitter();
    editing: boolean = false;

    constructor() { }

    ngOnChanges(changes: any): void {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }

    ngOnInit(): void {
        //
    }

    onNameChange(value: string): void {
        if (this.detail !== undefined) {
            this.detail.fullname = value;
        }
    }

    toggleEdit(): void {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove(): void {
        this.remove.emit(this.detail);
    }
}
