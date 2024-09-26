import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-registro-pomodoros',
  templateUrl: './registro-pomodoros.component.html',
  standalone: true,
  imports: [
    NgxChartsModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  styleUrls: ['./registro-pomodoros.component.scss']
})
export class RegistroPomodorosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  
  navigateToOTP(){
    this.router.navigate(['/otp']);
  }

  fillTableCellsRandomly(): void {
    if (typeof document !== 'undefined') {
      const cells = document.querySelectorAll('td:not(:first-child)');
      const classes = ['line-1', 'line-2', 'line-3', 'line-4'];
      cells.forEach(cell => {
        const randomClass = classes[Math.floor(Math.random() * classes.length)];
        cell.classList.add(randomClass);
      });
    }
  }
  
}
