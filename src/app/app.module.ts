import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MedicalOrderCreationWizardComponent } from './medical-order-creation-wizard/medical-order-creation-wizard.component';
import { FirstNameSelectionStepComponent } from './medical-order-creation-wizard/components/first-name-selection-step/first-name-selection-step.component';
import { LastNameSelectionStepComponent } from './medical-order-creation-wizard/components/last-name-selection-step/last-name-selection-step.component';
import { SummaryStepComponent } from './medical-order-creation-wizard/components/summary-step/summary-step.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalOrderCreationWizardComponent,
    FirstNameSelectionStepComponent,
    LastNameSelectionStepComponent,
    SummaryStepComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
