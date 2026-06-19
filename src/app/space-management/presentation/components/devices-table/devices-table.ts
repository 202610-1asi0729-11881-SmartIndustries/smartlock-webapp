import { Component, inject, input } from '@angular/core';
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
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { StatusBadge } from '../../../../shared/presentation/component/status-badge/status-badge';
import { Device } from '../../../domain/model/device.entity';
import { AddDeviceForm } from '../add-device-form/add-device-form';
import { SpaceManagementStore } from '../../../application/space-management.store';

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
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    StatusBadge
  ],
  templateUrl: './devices-table.html',
  styleUrl: './devices-table.css',
})
export class DevicesTable {
  devices = input<Device[]>([]);
  protected devicesColumns: string[] = ['id', 'name', 'siteName', 'mode', 'status', 'actions'];

  private readonly dialog = inject(MatDialog);
  private readonly store = inject(SpaceManagementStore);

  protected editDevice(device: Device): void {
    this.dialog.open(AddDeviceForm, { data: device });
  }

  protected deleteDevice(device: Device): void {
    this.store.deleteDevice(device.id);
  }
}