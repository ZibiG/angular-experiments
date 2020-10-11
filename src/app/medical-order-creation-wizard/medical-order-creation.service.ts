import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MedicalOrderCreationService {
    private firstName: string  = '';
    private lastName: string = '';

    private readonly nextStepTransition = new Subject<void>();
    private readonly nextStepTransitionAvailability = new Subject<boolean>();

    constructor() {}

    get nextStepTransition$(): Observable<void> {
        return this.nextStepTransition;
    }

    get nextStepTransitionAvailability$(): Observable<boolean> {
        return this.nextStepTransitionAvailability;
    }

    setFirstName(firstName: string) {
        console.log(firstName);
        this.firstName = firstName;
    }

    setLastName(lastName: string) {
        console.log(lastName);
        this.lastName = lastName;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    createMedicalOrder() {
        alert(`Medical order created for patient ${this.firstName} ${this.lastName}`);
    }

    toggleNextStepTransitionAvailability(isAvailable: boolean) {
        this.nextStepTransitionAvailability.next(isAvailable);
    }

    advanceToNextStep() {
        this.nextStepTransition.next();
    }
}
