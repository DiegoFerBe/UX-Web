import { Component } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgxChartsModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showButtons: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.showButtons = !(url === '/' || url === '/login' || url === '/otp');
      }
    });
  }

  exit(){
    this.router.navigate(['/']);
  }
  goHome(){
    const currentUrl = this.router.url;
    if (currentUrl !== '/' && currentUrl !== '/login' && currentUrl !== '/otp') {
      this.router.navigate(['/home']);
    }
  }
}
