import { Component } from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {PeopleTable} from '../../components/people-table/people-table';

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
  protected statusOptions = ["All", "Active", "Inactive", "Identification lost"];
  protected siteOptions = ["All", "Off-site", "North Campus", "East Convention Center"]
}
