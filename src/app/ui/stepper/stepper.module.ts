import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    StepperComponent
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class StepperModule { }
