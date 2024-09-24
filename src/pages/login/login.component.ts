import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule if using forms
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { GenericButtonComponent } from '../../components/generic-button/generic-button.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule, // Include MatInputModule
    MatFormFieldModule, // Include MatFormFieldModule]
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    GenericButtonComponent
  ],
  templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {}

  navigateToOTP() {
    this.router.navigate(['/otp']);
  }

}
