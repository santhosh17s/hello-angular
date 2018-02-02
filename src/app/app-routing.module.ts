import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';

import { TitleDefaultDirective } from './title-default.directive';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path:'about', component: AboutComponent, data: { title: 'About'}  },
  { path:'contact', component: ContactComponent, data: { title: 'Contact'}, canActivate: [AuthGuard] },
  { path:'portfolio', component:  PortfolioComponent, data: { title: 'Portfolio'}, canActivate: ['canAlwaysActiveGuard']  },
  { path:'todo', component: TodoComponent, data: { title: 'Todo'}  },
  { path:'login', loadChildren: './features/feature.module#FeatureModule'   },
  { path: '', redirectTo: 'about',pathMatch: 'full' }
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