import {Component} from '@angular/core';
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
import {TranslatePipe} from '@ngx-translate/core';

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
    TranslatePipe
  ],
  templateUrl: './roles-table.html',
  styleUrl: './roles-table.css',
})
export class RolesTable {
  protected roles: {id: number, name: string}[] = [
    {id: 1, name: 'Administrator'},
    {id: 2, name: 'Operator'},
    {id: 3, name: 'Viewer'},
    {id: 4, name: 'Auditor'},
  ];
  protected rolesColumns: string[] = ['id', 'name'];
}
