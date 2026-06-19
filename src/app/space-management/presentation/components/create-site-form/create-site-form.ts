import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { SpaceManagementStore } from '../../../application/space-management.store';
import { Site } from '../../../domain/model/site.entity';

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
  protected readonly data = inject<Site | null>(MAT_DIALOG_DATA, { optional: true });

  protected readonly isEdit = this.data !== null;
  protected name = this.data?.name ?? '';
  protected description = this.data?.description ?? '';

  protected submit(): void {
    if (!this.name) return;

    if (this.isEdit) {
      this.store.updateSite(this.data!.id, this.name, this.description);
    } else {
      this.store.createSite(this.name, this.description);
    }
    this.dialogRef.close();
  }
}