import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { OtpComponent } from '../pages/otp/otp.component';
import { HomeComponent } from '../pages/home/home.component';
import { RegistroPomodorosComponent } from '../pages/registro-pomodoros/registro-pomodoros.component';
import { PerfilComponent } from '../components/perfil/perfil.component';

export const routes: Routes = [
    {path:'login',component: LoginComponent},
    {path:'otp',component: OtpComponent},
    {path:'home',component: HomeComponent},
    {path:'pomo-reg',component:RegistroPomodorosComponent},
    {path:'perfil',component:PerfilComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    
];
