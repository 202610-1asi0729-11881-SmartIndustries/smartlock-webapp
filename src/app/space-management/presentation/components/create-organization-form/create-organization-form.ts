import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { SpaceManagementStore } from '../../../application/space-management.store';

@Component({
  selector: 'app-create-organization-form',
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
  ],
  templateUrl: './create-organization-form.html',
  styleUrl: './create-organization-form.css',
})
export class CreateOrganizationForm {
  protected readonly store = inject(SpaceManagementStore);
  protected readonly dialogRef = inject(MatDialogRef<CreateOrganizationForm>);

  protected name = '';
  protected description = '';

  protected submit(): void {
    if (this.name) {
      this.store.createOrganization(this.name, this.description);
      this.dialogRef.close();
    }
  }
}