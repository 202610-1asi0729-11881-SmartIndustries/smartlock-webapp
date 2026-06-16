import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { IamStore } from '../../../application/iam.store';

@Component({
  selector: 'app-sign-up',
  imports: [
    FormsModule,
    RouterLink,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatIcon,
  ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  protected readonly store = inject(IamStore);

  protected firstName = '';
  protected lastName = '';
  protected email = '';
  protected password = '';
  protected hidePassword = true;

  protected onSubmit(): void {
    if (this.firstName && this.lastName && this.email && this.password) {
      this.store.signUp(this.firstName, this.lastName, this.email, this.password);
    }
  }
}
