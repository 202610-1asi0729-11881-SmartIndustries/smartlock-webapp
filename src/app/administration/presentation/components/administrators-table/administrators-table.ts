import {Component, input} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {TranslatePipe} from '@ngx-translate/core';
import {Administrator} from '../../../domain/model/administrator.entity';

@Component({
  selector: 'app-administrators-table',
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
  templateUrl: './administrators-table.html',
  styleUrl: './administrators-table.css',
})
export class AdministratorsTable {
  administrators = input<Administrator[]>([]);
  protected administratorsColumns: string[] = ['id', 'name', 'role', 'status'];
}
