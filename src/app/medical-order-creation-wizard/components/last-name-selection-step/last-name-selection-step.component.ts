import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MedicalOrderCreationService } from '../../medical-order-creation.service';

@Component({
    selector: 'app-last-name-selection-step',
    templateUrl: './last-name-selection-step.component.html',
    styleUrls: ['./last-name-selection-step.component.scss'],
})
export class LastNameSelectionStepComponent implements OnInit, OnDestroy {
    private nextStepSubscription: Subscription;

    lastName: string;

    constructor(
        private medicalOrderCreationService: MedicalOrderCreationService
    ) {}

    ngOnInit() {
        this.lastName = this.medicalOrderCreationService.getLastName();
        this.nextStepSubscription = this.medicalOrderCreationService.nextStep.subscribe(
            () => {
                this.medicalOrderCreationService.setLastName(this.lastName);
            }
        );
        this.medicalOrderCreationService.changeNextStepAccess(this.lastName !== '');
    }

    ngOnDestroy(): void {
        this.nextStepSubscription.unsubscribe();
    }

    onLastNameChanged() {
        this.medicalOrderCreationService.changeNextStepAccess(this.lastName !== '');
    }
}
