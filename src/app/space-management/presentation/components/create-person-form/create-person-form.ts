import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { SpaceManagementStore } from '../../../application/space-management.store';
import { Person } from '../../../domain/model/person.entity';

@Component({
  selector: 'app-create-person-form',
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
  templateUrl: './create-person-form.html',
  styleUrl: './create-person-form.css',
})
export class CreatePersonForm {
  protected readonly store = inject(SpaceManagementStore);
  protected readonly dialogRef = inject(MatDialogRef<CreatePersonForm>);
  protected readonly data = inject<Person | null>(MAT_DIALOG_DATA, { optional: true });

  protected readonly isEdit = this.data !== null;
  protected firstName = this.data?.firstName ?? '';
  protected lastName = this.data?.lastName ?? '';
  protected identityDocument = this.data?.identityDocument ?? '';

  protected submit(): void {
    if (!this.firstName || !this.lastName || !this.identityDocument) return;

    if (this.isEdit) {
      this.store.updatePerson(this.data!.id, this.firstName, this.lastName, this.identityDocument);
    } else {
      this.store.createPerson(this.firstName, this.lastName, this.identityDocument);
    }
    this.dialogRef.close();
  }
}