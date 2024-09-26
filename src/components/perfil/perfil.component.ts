import { Component, OnInit } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { multi } from '../../data/data';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatOption, MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    NgxChartsModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfilForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      profesion: ['', Validators.required],
      actividad: ['', Validators.required],
      franja: ['', Validators.required],
      tiempoProductivo: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.perfilForm.valid) {
      console.log(this.perfilForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  increaseTime(): void {
    const currentValue = this.perfilForm.get('tiempoProductivo').value;
    this.perfilForm.get('tiempoProductivo').setValue(currentValue + 1);
  }

  decreaseTime(): void {
    const currentValue = this.perfilForm.get('tiempoProductivo').value;
    if (currentValue > 1) {
      this.perfilForm.get('tiempoProductivo').setValue(currentValue - 1);
    }
  }
  onCancel(): void {
    this.perfilForm.reset();
  }

}
