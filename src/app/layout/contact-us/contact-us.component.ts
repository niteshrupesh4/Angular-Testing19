import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm!: FormGroup;
  userId=0;
  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  triggerError() {
    // Simulate a non-HTTP error
    throw new Error('This is a simulated error');
  }

  onSubmit() {
    if (this.contactForm.valid) {
    
    }
  }
}
