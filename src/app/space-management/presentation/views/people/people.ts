import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {PeopleTable} from '../../components/people-table/people-table';
import {CreatePersonForm} from '../../components/create-person-form/create-person-form';
import {SpaceManagementStore} from '../../../application/space-management.store';

@Component({
  selector: 'app-people',
  imports: [
    MatIcon,
    MatIconButton,
    PeopleTable,
  ],
  templateUrl: './people.html',
  styleUrl: './people.css',
})
export class People {
  protected readonly dialog = inject(MatDialog);
  protected readonly store = inject(SpaceManagementStore);

  protected openCreatePersonForm() {
    this.dialog.open(CreatePersonForm);
  }
}