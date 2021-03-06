import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MedicalOrderCreationService } from '../../medical-order-creation.service';

@Component({
    selector: 'app-first-name-selection-step',
    templateUrl: './first-name-selection-step.component.html',
    styleUrls: ['./first-name-selection-step.component.scss'],
})
export class FirstNameSelectionStepComponent implements OnInit, OnDestroy {
    private nextStepTransitionSub: Subscription;

    firstName: string;

    constructor(
        private medicalOrderCreationService: MedicalOrderCreationService
    ) {}

    ngOnInit() {
        this.firstName = this.medicalOrderCreationService.getFirstName();
        this.nextStepTransitionSub = this.medicalOrderCreationService.nextStepTransition$.subscribe(
            () => {
                this.medicalOrderCreationService.setFirstName(this.firstName);
            }
        );
        this.notifyAboutNextStepTransitionAvailability(this.firstName !== '');
    }

    ngOnDestroy(): void {
        this.nextStepTransitionSub.unsubscribe();
    }

    onFirstNameChanged() {
        this.notifyAboutNextStepTransitionAvailability(this.firstName !== '');
    }

    private notifyAboutNextStepTransitionAvailability(isAvailable: boolean) {
        this.medicalOrderCreationService.toggleNextStepTransitionAvailability(isAvailable);
    }
}
