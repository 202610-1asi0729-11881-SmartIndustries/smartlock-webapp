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
  selector: 'app-sign-in',
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
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  protected readonly store = inject(IamStore);

  protected email = '';
  protected password = '';
  protected hidePassword = true;

  protected onSubmit(): void {
    if (this.email && this.password) {
      this.store.signIn(this.email, this.password);
    }
  }
}
