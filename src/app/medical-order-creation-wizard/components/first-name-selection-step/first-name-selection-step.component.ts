import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MedicalOrderCreationService } from '../../medical-order-creation.service';

@Component({
    selector: 'app-first-name-selection-step',
    templateUrl: './first-name-selection-step.component.html',
    styleUrls: ['./first-name-selection-step.component.scss'],
})
export class FirstNameSelectionStepComponent implements OnInit, OnDestroy {
    private nextStepSubscription: Subscription;

    firstName: string;

    constructor(
        private medicalOrderCreationService: MedicalOrderCreationService
    ) {}

    ngOnInit() {
        this.firstName = this.medicalOrderCreationService.getFirstName();
        this.nextStepSubscription = this.medicalOrderCreationService.nextStep.subscribe(
            () => {
                this.medicalOrderCreationService.setFirstName(this.firstName);
            }
        );
        this.medicalOrderCreationService.changeNextStepAccess(this.firstName !== '');
    }

    ngOnDestroy(): void {
        this.nextStepSubscription.unsubscribe();
    }

    onFirstNameChanged() {
        this.medicalOrderCreationService.changeNextStepAccess(this.firstName !== '');
    }
}
