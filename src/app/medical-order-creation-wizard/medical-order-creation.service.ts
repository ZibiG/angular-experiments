import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MedicalOrderCreationService {
    private firstName: string  = '';
    private lastName: string = '';

    nextStep = new Subject<void>();
    advanceToNextStepAllowed = new Subject<boolean>();

    constructor() {}

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

    changeNextStepAccess(isAllowed: boolean) {
        this.advanceToNextStepAllowed.next(isAllowed);
    }

    advanceToNextStep() {
        this.nextStep.next();
    }
}
