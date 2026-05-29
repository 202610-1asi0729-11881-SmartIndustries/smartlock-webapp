import {Component} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-add-device-form',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    MatOption,
    MatSelect,
  ],
  templateUrl: './add-device-form.html',
  styleUrl: './add-device-form.css',
})
export class AddDeviceForm {
  protected siteOptions = ['Main Office', 'North Campus', 'East Convention Center', 'Warehouse'];
}
