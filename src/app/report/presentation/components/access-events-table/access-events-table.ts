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
import {AccessEvent} from '../../../domain/model/access-event.entity';

@Component({
  selector: 'app-access-events-table',
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
  templateUrl: './access-events-table.html',
  styleUrl: './access-events-table.css',
})
export class AccessEventsTable {
  audit = input<AccessEvent[]>([]);
  protected auditColumns: string[] = ['id', 'location', 'person', 'status', 'date'];
}
