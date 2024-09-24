import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-generic-button',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './generic-button.component.html',
  styleUrl: './generic-button.component.scss'
})
export class GenericButtonComponent {

  @Input() labelButton:string = 'Button';
  @Output() dataEmitter = new EventEmitter<void>();


  buttonWasClicked() {
    this.dataEmitter.emit();
  }

}
