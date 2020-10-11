import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MedicalOrderCreationService } from '../../medical-order-creation.service';

@Component({
    selector: 'app-summary-step',
    templateUrl: './summary-step.component.html',
    styleUrls: ['./summary-step.component.css'],
})
export class SummaryStepComponent implements OnInit {

    firstName: string;
    lastName: string;

    constructor(
        private medicalOrderCreationService: MedicalOrderCreationService
    ) {}

    ngOnInit(): void {
        this.firstName = this.medicalOrderCreationService.getFirstName();
        this.lastName = this.medicalOrderCreationService.getLastName();
    }
}
