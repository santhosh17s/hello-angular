import { NgModule } from "@angular/core";

import { LoginComponent } from '../login/login.component';

@NgModule({
    imports: [LoginComponent],
    exports: [LoginComponent]
})
export class FeatureModule { }