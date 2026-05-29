import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {DevicesTable} from '../../components/devices-table/devices-table';
import {AddDeviceForm} from '../../components/add-device-form/add-device-form';

@Component({
  selector: 'app-devices',
  imports: [
    SearchBar,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatIcon,
    MatIconButton,
    DevicesTable,
  ],
  templateUrl: './devices.html',
  styleUrl: './devices.css',
})
export class Devices {
  protected readonly dialog = inject(MatDialog);

  protected siteOptions = ['All', 'Off-site', 'North Campus', 'East Convention Center'];
  protected statusOptions = ['Online', 'Offline'];
  protected modeOptions = ['Free', 'Blocked', 'Security'];

  protected openAddDeviceForm() {
    this.dialog.open(AddDeviceForm);
  }
}
