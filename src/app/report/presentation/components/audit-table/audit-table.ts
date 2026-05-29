import { Component } from '@angular/core';
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

@Component({
  selector: 'app-audit-table',
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
  templateUrl: './audit-table.html',
  styleUrl: './audit-table.css',
})
export class AuditTable {
  protected audit: {type: string, status: string, personName: string, location: string, dateTime: string}[] = [
    {type: 'Access attempt', status: 'Accepted', personName: 'Carlos Mendoza', location: 'North Campus', dateTime: '2021-01-01'},
    {type: 'Access attempt', status: 'Accepted', personName: 'Carlos Mendoza', location: 'North Campus', dateTime: '2021-01-01'},
    {type: 'Alert', status: 'Accepted', personName: 'Carlos Mendoza', location: 'North Campus', dateTime: '2021-01-01'},
    {type: 'Access attempt', status: 'Rejected', personName: 'Carlos Mendoza', location: 'North Campus', dateTime: '2021-01-01'},
    {type: 'Alert', status: 'Resolved', personName: 'Carlos Mendoza', location: 'North Campus', dateTime: '2021-01-01'},
    {type: 'Access attempt', status: 'Accepted', personName: 'Carlos Mendoza', location: 'North Campus', dateTime: '2021-01-01'},
  ];

  protected auditColumns: string[] = ['type', 'status', 'personName', 'location', 'dateTime'];
}
