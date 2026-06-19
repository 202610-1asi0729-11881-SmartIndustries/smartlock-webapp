import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { AdministrationStore } from '../../../application/administration.store';
import { Role } from '../../../domain/model/role.entity';

@Component({
  selector: 'app-create-role-form',
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
    MatCheckbox,
  ],
  templateUrl: './create-role-form.html',
  styleUrl: './create-role-form.css',
})
export class CreateRoleForm {
  protected readonly store = inject(AdministrationStore);
  protected readonly dialogRef = inject(MatDialogRef<CreateRoleForm>);
  protected readonly data = inject<Role | null>(MAT_DIALOG_DATA, { optional: true });

  protected readonly isEdit = this.data !== null;
  protected name = this.data?.name ?? '';
  protected canCreateSites = this.data?.canCreateSites ?? false;
  protected canCreatePeople = this.data?.canCreatePeople ?? false;
  protected canConnectDevices = this.data?.canConnectDevices ?? false;

  protected submit(): void {
    if (!this.name) return;

    if (this.isEdit) {
      this.store.updateRole(this.data!.id, this.name, this.canCreateSites, this.canCreatePeople, this.canConnectDevices);
    } else {
      this.store.createRole(this.name, this.canCreateSites, this.canCreatePeople, this.canConnectDevices);
    }
    this.dialogRef.close();
  }
}