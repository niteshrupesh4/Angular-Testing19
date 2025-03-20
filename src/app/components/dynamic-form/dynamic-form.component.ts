import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule,FormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  title = "reactive-forms-and-form-arrays";
  myForm!: FormGroup;

  get books(): FormArray {
    return (this.myForm.get('books') as FormArray);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.configForm();
  }

  addBook() {
    this.books.push(this.buildBook())
  }

  removeBook(i: number) {
    this.books.removeAt(i);
  }

  save() {
    alert(`New Author created: ${this.myForm?.get('author')?.value}`)
  }

  private configForm() {
    this.myForm = this.fb.group({
      author: ['', [Validators.required, Validators.maxLength(40)]],
      books: this.fb.array([this.buildBook()]),
    });
  }

  private buildBook(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(40)]],
      stars: [null, [Validators.required, NumberValidators.range(1, 5)]],
    });
  }
}
export class NumberValidators {

  static range(min: number, max: number): ValidatorFn {
      return (c: AbstractControl): { [key: string]: boolean } | null => {
          if ((c.value || c.value === 0) && (isNaN(c.value) || c.value < min || c.value > max)) {
              return { range: true };
          }
          return null;
      };
  }
}