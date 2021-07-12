import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { formsRoutes } from "./forms.routes";
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

@NgModule({
          declarations: [Form1Component, Form2Component],
          exports: [Form1Component,Form2Component],
          imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(formsRoutes)]
})
export class FormModules {}