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
import {TranslatePipe} from '@ngx-translate/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {StatusBadge} from '../../../../shared/presentation/component/status-badge/status-badge';

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
    MatRowDef,
    TranslatePipe,
    MatFormField,
    MatSelect,
    MatOption,
    StatusBadge
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected recentAccessAttempts : {person: string, deviceId: number, status: string }[] = [
    {person: "Juan Perez", deviceId: 1, status: "Accepted"},
    {person: "Imanol Limache", deviceId: 2, status: "Rejected"},
    {person: "Juan Perez", deviceId: 3, status: "Accepted"},
    {person: "Imanol Limache", deviceId: 2, status: "Rejected"},
    {person: "Imanol Limache", deviceId: 4, status: "Accepted"},
    {person: "Imanol Limache", deviceId: 4, status: "Rejected"},
    {person: "Imanol Limache", deviceId: 4, status: "Rejected"},
  ]
  protected recentAccessAttemptsColumns: string[] = ["person", "deviceId", "result"];
  protected sites: string[] = ['All', 'North campus', 'South campus', 'East campus'];
  protected selectedSite: string = 'All';

  protected recentAlerts: {person: string, type: string, date: string}[] = [
    {person: "Juan Perez", type: "Repeated", date: "18-05-2026 / 16:14"},
    {person: "Juan Perez", type: "Repeated", date: "18-05-2026 / 16:14"},
    {person: "Juan Perez", type: "Repeated", date: "18-05-2026 / 16:14"},
    {person: "Juan Perez", type: "Repeated", date: "18-05-2026 / 16:14"},
    {person: "Juan Perez", type: "Repeated", date: "18-05-2026 / 16:14"},
    {person: "Juan Perez", type: "Repeated", date: "18-05-2026 / 16:14"},
  ]
  protected recentAlertsColumns: string[] = ["person", "type", "date"];

  protected offlineDevices: {id: number, name: string, site: string}[] = [
    {id: 1, name: "Main entrance access", site: "North campus"},
    {id: 2, name: "Main entrance access", site: "North campus"},
    {id: 3, name: "Main entrance access", site: "North campus"},
    {id: 1, name: "Main entrance access", site: "North campus"},
    {id: 1, name: "Main entrance access", site: "North campus"},
    {id: 1, name: "Main entrance access", site: "North campus"},
    {id: 1, name: "Main entrance access", site: "North campus"},
  ]
  protected offlineDevicesColumns: string[] = ["id", "name", "site"];
}
