import { Component, inject, input } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { Role } from '../../../domain/model/role.entity';
import { CreateRoleForm } from '../create-role-form/create-role-form';
import { AdministrationStore } from '../../../application/administration.store';

@Component({
  selector: 'app-roles-table',
  imports: [
    MatTable,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    TranslatePipe
  ],
  templateUrl: './roles-table.html',
  styleUrl: './roles-table.css',
})
export class RolesTable {
  roles = input<Role[]>([]);
  protected rolesColumns: string[] = ['name', 'deletable', 'actions'];

  private readonly dialog = inject(MatDialog);
  private readonly store = inject(AdministrationStore);

  protected editRole(role: Role): void {
    this.dialog.open(CreateRoleForm, { data: role });
  }
}