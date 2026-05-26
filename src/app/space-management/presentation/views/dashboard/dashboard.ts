import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
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
  selector: 'app-dashboard',
  imports: [
    MatCardContent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected recentAccessAttempts : {person: string, deviceId: number, result: boolean }[] = [
    {person: "Juan Perez", deviceId: 1, result: true},
    {person: "Imanol Limache", deviceId: 2, result: true},
    {person: "Juan Perez", deviceId: 3, result: true},
    {person: "Imanol Limache", deviceId: 2, result: true},
    {person: "Imanol Limache", deviceId: 4, result: true},
  ]

  protected recentAccessAttemptsColumns: string[] = ["person", "deviceId", "result"];
}
