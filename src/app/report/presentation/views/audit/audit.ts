import { Component } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {AuditTable} from '../../components/audit-table/audit-table';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';

@Component({
  selector: 'app-audit',
  imports: [
    SearchBar,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatIcon,
    MatIconButton,
    AuditTable,
    SearchBar
  ],
  templateUrl: './audit.html',
  styleUrl: './audit.css',
})
export class Audit {
  protected typeOptions: string[] = ['Access attempt', 'Alert'];
  protected statusOptions: string[] = ['Accepted', 'Rejected', 'Resolved'];
}
