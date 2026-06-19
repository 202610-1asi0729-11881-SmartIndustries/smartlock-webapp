import {Component, input} from '@angular/core';
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
import { TranslatePipe } from '@ngx-translate/core';
import { Role } from '../../../domain/model/role.entity';

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

  protected editRole(role: Role): void {
    // TODO
  }
}