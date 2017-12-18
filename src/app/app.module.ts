import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TitleDefaultDirective } from './title-default.directive';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TitleDefaultDirective,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    TodoComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ counterReducer }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
