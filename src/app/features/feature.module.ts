import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from "@angular/router";


export const featureRoute: Routes = [
    { path:'', component: LoginComponent }
];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(featureRoute)
    ],
    exports: [LoginComponent]
})
export class FeatureModule { }