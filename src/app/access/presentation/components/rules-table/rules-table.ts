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
  selector: 'app-rules-table',
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
  templateUrl: './rules-table.html',
  styleUrl: './rules-table.css',
})
export class RulesTable {
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
