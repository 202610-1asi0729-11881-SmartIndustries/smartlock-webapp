import {Component, input} from '@angular/core';
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
import {Person} from '../../../domain/model/person.entity';

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
    MatCellDef
  ],
  templateUrl: './people-table.html',
  styleUrl: './people-table.css',
})
export class PeopleTable {
  people = input<Person[]>([]);
  protected peopleColumns = ["id", "name", "currentLocation", "status"];
}
