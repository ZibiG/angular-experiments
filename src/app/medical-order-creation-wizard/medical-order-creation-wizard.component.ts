import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MedicalOrderCreationService } from './medical-order-creation.service';

@Component({
    selector: 'app-medical-order-creation-wizard',
    templateUrl: './medical-order-creation-wizard.component.html',
    styleUrls: ['./medical-order-creation-wizard.component.scss'],
    providers: [MedicalOrderCreationService],
})
export class MedicalOrderCreationWizardComponent implements OnInit, OnDestroy {
    private nextStepAllowedSubscription: Subscription;

    currentStep = 1;
    nextStepEnabled: boolean = false;

    constructor(
        private medicalOrderCreationService: MedicalOrderCreationService
    ) {}
    
    ngOnInit() {
        this.nextStepAllowedSubscription =  this.medicalOrderCreationService.advanceToNextStepAllowed.subscribe((nextStepAllowed) => {
            this.nextStepEnabled = nextStepAllowed;
        })
    }
    
    ngOnDestroy(): void {
        this.nextStepAllowedSubscription.unsubscribe();
    }

    onGoToPreviousStep() {
        this.currentStep--;
    }

    onGoToNextStep() {
        this.medicalOrderCreationService.advanceToNextStep();
        this.currentStep++;
    }

    onCreateStep() {
        this.medicalOrderCreationService.createMedicalOrder();
    }
}
