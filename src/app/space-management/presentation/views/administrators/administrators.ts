import { Component } from '@angular/core';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {AdministratorsTable} from '../../components/administrators-table/administrators-table';

@Component({
  selector: 'app-administrators',
  imports: [
    SearchBar,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatIcon,
    MatIconButton,
    AdministratorsTable
  ],
  templateUrl: './administrators.html',
  styleUrl: './administrators.css',
})
export class Administrators {
  protected rolesOptions: String[] = ["Operator", "Root"];
}
