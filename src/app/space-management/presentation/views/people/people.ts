import {Component, inject} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {PeopleTable} from '../../components/people-table/people-table';
import {CreatePersonForm} from '../../components/create-person-form/create-person-form';

@Component({
  selector: 'app-people',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatIconButton,
    SearchBar,
    MatOption,
    MatSelect,
    PeopleTable,
    MatButton
  ],
  templateUrl: './people.html',
  styleUrl: './people.css',
})
export class People {
  protected readonly dialog = inject(MatDialog);

  protected statusOptions = ["All", "Active", "Inactive", "Identification lost"];
  protected siteOptions = ["All", "Off-site", "North Campus", "East Convention Center"];

  protected openCreatePersonForm() {
    this.dialog.open(CreatePersonForm);
  }
}
