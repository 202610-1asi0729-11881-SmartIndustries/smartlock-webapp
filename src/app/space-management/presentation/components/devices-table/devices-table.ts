import { Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef, MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-devices-table',
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
  templateUrl: './devices-table.html',
  styleUrl: './devices-table.css',
})
export class DevicesTable {
  protected devices: {id: number, name: string, site: string, mode: string, status: string}[] = [
    {id: 1, name: "Main entrance access", site: "North campus", mode: "Free", status: "Online"},
    {id: 1, name: "Main entrance access", site: "North campus", mode: "Free", status: "Online"},
    {id: 1, name: "Main entrance access", site: "North campus", mode: "Free", status: "Online"},
    {id: 1, name: "Main entrance access", site: "North campus", mode: "Free", status: "Online"},
    {id: 1, name: "Main entrance access", site: "North campus", mode: "Free", status: "Online"},
  ]

  protected devicesColumns: string[] = ['id', 'name', 'site', 'mode', 'status'];
}
