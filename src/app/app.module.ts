import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {HeaderComponent} from './header/header.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RegisterService} from './register/register.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    PasswordResetComponent,
    DashboardComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
