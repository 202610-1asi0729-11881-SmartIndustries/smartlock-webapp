import {Component, input} from '@angular/core';
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
import { StatusBadge } from '../../../../shared/presentation/component/status-badge/status-badge';
import {Device} from '../../../domain/model/device.entity';

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
    MatHeaderCellDef,
    StatusBadge
  ],
  templateUrl: './devices-table.html',
  styleUrl: './devices-table.css',
})
export class DevicesTable {
  devices = input<Device[]>([]);
  protected devicesColumns: string[] = ['id', 'name', 'site', 'mode', 'status'];
}
