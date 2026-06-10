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
import {AccessGroup} from '../../../domain/model/access-group.entity';

@Component({
  selector: 'app-access-groups-table',
  imports: [
    MatTable,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef
  ],
  templateUrl: './access-groups-table.html',
  styleUrl: './access-groups-table.css',
})
export class AccessGroupsTable {
  rules = input<AccessGroup[]>([]);
  protected rulesColumns: string[] = ['id', 'name'];
}
