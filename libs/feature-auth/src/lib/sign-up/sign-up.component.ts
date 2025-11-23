import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'feature-auth-sign-up',
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  #fb = inject(FormBuilder);


  signUpForm = this.#fb.group({
    fullname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    phoneNo: ['']
  })

  get signUpControls(){
    return this.signUpForm.controls
  }

  onSignUpSubmit() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    console.log({
      formValues: this.signUpForm.getRawValue(),
    });
  }

}
