import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TitleDefaultDirective } from './title-default.directive';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes: Routes = [
  { path:'', component: LoginComponent } ,
  { path:'about', component: AboutComponent },
  { path:'contact', component: ContactComponent },
  { path:'login', component: LoginComponent },
  { path:'portfolio', component:  PortfolioComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {

}