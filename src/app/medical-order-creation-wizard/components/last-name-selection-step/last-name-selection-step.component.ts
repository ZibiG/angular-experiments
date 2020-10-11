import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MedicalOrderCreationService } from '../../medical-order-creation.service';

@Component({
    selector: 'app-last-name-selection-step',
    templateUrl: './last-name-selection-step.component.html',
    styleUrls: ['./last-name-selection-step.component.scss'],
})
export class LastNameSelectionStepComponent implements OnInit, OnDestroy {
    private nextStepTransitionSub: Subscription;

    lastName: string;

    constructor(
        private medicalOrderCreationService: MedicalOrderCreationService
    ) {}

    ngOnInit() {
        this.lastName = this.medicalOrderCreationService.getLastName();
        this.nextStepTransitionSub = this.medicalOrderCreationService.nextStepTransition$.subscribe(
            () => {
                this.medicalOrderCreationService.setLastName(this.lastName);
            }
        );
        this.notifyAboutNextStepTransitionAvailability(this.lastName !== '');
    }

    ngOnDestroy(): void {
        this.nextStepTransitionSub.unsubscribe();
    }

    onLastNameChanged() {
        this.notifyAboutNextStepTransitionAvailability(this.lastName !== '');
    }

    private notifyAboutNextStepTransitionAvailability(isAvailable: boolean) {
        this.medicalOrderCreationService.toggleNextStepTransitionAvailability(isAvailable);
    }
}
