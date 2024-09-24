import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GenericButtonComponent } from '../../components/generic-button/generic-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [
    MatInputModule, // Include MatInputModule
    MatFormFieldModule, // Include MatFormFieldModule]
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    GenericButtonComponent
  ],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent {

  @ViewChildren('otp0, otp1, otp2, otp3, otp4, otp5')
  otpInputs!: QueryList<ElementRef>;

  constructor(private router:Router) {}

  // Method to handle OTP input change
  onOtpChange(event: any, index: number): void {
    const input = event.target;
    const value = input.value;

    if (value && index < 5) {
      // Move focus to the next input
      this.otpInputs.toArray()[index + 1].nativeElement.focus();
    } else if (!value && index > 0) {
      // Move focus to the previous input if the input is cleared
      this.otpInputs.toArray()[index - 1].nativeElement.focus();
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
