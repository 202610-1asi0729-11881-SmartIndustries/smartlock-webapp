import { Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';

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
    MatRowDef
  ],
  templateUrl: './administrators-table.html',
  styleUrl: './administrators-table.css',
})
export class AdministratorsTable {
  protected administrators: {id: number, name: string, role: string}[] = [
    {id: 1, name: "Imanol Limache", role: "Operator"},
    {id: 1, name: "Imanol Limache", role: "Operator"},
    {id: 1, name: "Imanol Limache", role: "Operator"},
    {id: 1, name: "Imanol Limache", role: "Operator"},
    {id: 1, name: "Imanol Limache", role: "Operator"},
  ];
  protected administratorsColumns: string[] = ["id", "name", "role"]
}
