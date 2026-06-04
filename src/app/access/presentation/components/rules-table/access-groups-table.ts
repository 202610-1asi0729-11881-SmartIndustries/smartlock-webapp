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
  protected rules: {id: number, name: string, site: string, status: string}[] = [
    {id: 1, name: 'Weekend maintenance', site: 'North campus', status: 'active'},
    {id: 1, name: 'Weekend maintenance', site: 'North campus', status: 'active'},
    {id: 1, name: 'Weekend maintenance', site: 'North campus', status: 'active'},
    {id: 1, name: 'Weekend maintenance', site: 'North campus', status: 'active'},
    {id: 1, name: 'Weekend maintenance', site: 'North campus', status: 'active'},
    {id: 1, name: 'Weekend maintenance', site: 'North campus', status: 'active'},
    {id: 1, name: 'Weekend maintenance', site: 'North campus', status: 'active'},
  ];

  protected rulesColumns: string[] = ['id', 'name', 'site', 'status'];
}
