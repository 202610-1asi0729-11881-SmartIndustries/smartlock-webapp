import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { SpaceManagementStore } from '../../../application/space-management.store';

@Component({
  selector: 'app-create-site-form',
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
  templateUrl: './create-site-form.html',
  styleUrl: './create-site-form.css',
})
export class CreateSiteForm {
  protected readonly store = inject(SpaceManagementStore);
  protected readonly dialogRef = inject(MatDialogRef<CreateSiteForm>);

  protected name = '';
  protected description = '';

  protected submit(): void {
    if (this.name) {
      this.store.createSite(this.name, this.description);
      this.dialogRef.close();
    }
  }
}