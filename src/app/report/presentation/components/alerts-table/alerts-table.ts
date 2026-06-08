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
  protected alerts: {id: number, location: string, person: string, status: string, date: string}[] = [
    {id: 1, location: 'North Campus', person: 'Carlos Mendoza', status: 'Active', date: '2025-06-08'},
    {id: 2, location: 'South Campus', person: 'Ana García', status: 'Resolved', date: '2025-06-07'},
    {id: 3, location: 'Downtown Office', person: 'Luis Torres', status: 'Active', date: '2025-06-07'},
    {id: 4, location: 'North Campus', person: 'Sara López', status: 'Resolved', date: '2025-06-06'},
    {id: 5, location: 'Warehouse A', person: 'Pedro Ramírez', status: 'Active', date: '2025-06-05'},
  ];
  protected alertsColumns: string[] = ['id', 'location', 'person', 'status', 'date'];
}
