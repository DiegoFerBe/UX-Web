import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { OtpComponent } from '../pages/otp/otp.component';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
    {path:'login',component: LoginComponent},
    {path:'otp',component: OtpComponent},
    {path:'home',component: HomeComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
];
