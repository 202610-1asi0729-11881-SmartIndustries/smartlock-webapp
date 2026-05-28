import { Component } from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-people-table',
  imports: [
    MatHeaderRow,
    MatTable,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef
  ],
  templateUrl: './people-table.html',
  styleUrl: './people-table.css',
})
export class PeopleTable {
  protected people: {id: number, name: string, currentLocation: string, status: "active"|"inactive"}[] = [
    {id: 1, name: "Carlos Mendoza", currentLocation: "North Campus - Server room", status: "active"},
    {id: 1, name: "Carlos Mendoza", currentLocation: "North Campus - Server room", status: "active"},
    {id: 1, name: "Carlos Mendoza", currentLocation: "North Campus - Server room", status: "active"},
    {id: 1, name: "Carlos Mendoza", currentLocation: "North Campus - Server room", status: "active"},
    {id: 1, name: "Carlos Mendoza", currentLocation: "North Campus - Server room", status: "active"},
    {id: 1, name: "Carlos Mendoza", currentLocation: "North Campus - Server room", status: "active"},
  ]

  protected peopleColumns = ["id", "name", "currentLocation", "status"];
}
