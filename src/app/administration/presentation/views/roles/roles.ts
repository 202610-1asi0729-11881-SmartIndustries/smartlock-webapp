import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { RolesTable } from '../../components/roles-table/roles-table';
import { CreateRoleForm } from '../../components/create-role-form/create-role-form';
import { AdministrationStore } from '../../../application/administration.store';

@Component({
  selector: 'app-roles',
  imports: [
    RolesTable,
    TranslatePipe,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {
  protected readonly store = inject(AdministrationStore);
  protected readonly dialog = inject(MatDialog);

  protected openCreateRoleForm(): void {
    this.dialog.open(CreateRoleForm);
  }
}