import { Component, inject, input } from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
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
import { Person } from '../../../domain/model/person.entity';
import { CreatePersonForm } from '../create-person-form/create-person-form';
import { SpaceManagementStore } from '../../../application/space-management.store';

@Component({
  selector: 'app-people-table',
  imports: [
    MatHeaderRow,
    MatTable,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './people-table.html',
  styleUrl: './people-table.css',
})
export class PeopleTable {
  people = input<Person[]>([]);
  protected peopleColumns = ['id', 'firstName', 'lastName', 'identityDocument', 'actions'];

  private readonly dialog = inject(MatDialog);
  private readonly store = inject(SpaceManagementStore);

  protected editPerson(person: Person): void {
    this.dialog.open(CreatePersonForm, { data: person });
  }

  protected deletePerson(person: Person): void {
    this.store.deletePerson(person.id);
  }
}