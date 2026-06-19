import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {AccessGroupsTable} from '../../components/rules-table/access-groups-table';
import {CreateAccessGroupForm} from '../../components/create-access-group-form/create-access-group-form';
import {AccessStore} from '../../../application/access.store';

@Component({
  selector: 'app-access-groups',
  imports: [
    MatIcon,
    MatIconButton,
    AccessGroupsTable,
  ],
  templateUrl: './access-groups.html',
  styleUrl: './access-groups.css',
})
export class AccessGroups {
  protected readonly dialog = inject(MatDialog);
  protected readonly store = inject(AccessStore);

  protected openCreateRuleForm() {
    this.dialog.open(CreateAccessGroupForm);
  }
}