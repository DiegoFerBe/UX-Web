import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule if using forms
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule, // Include MatInputModule
    MatFormFieldModule, // Include MatFormFieldModule]
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

}
