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
import {TranslatePipe} from '@ngx-translate/core';
import {Alert} from '../../../domain/model/alert.entity';

@Component({
  selector: 'app-alerts-table',
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
  templateUrl: './alerts-table.html',
  styleUrl: './alerts-table.css',
})
export class AlertsTable {
  alerts = input<Alert[]>([]);
  protected alertsColumns: string[] = ['id', 'location', 'person', 'status', 'date'];
}
