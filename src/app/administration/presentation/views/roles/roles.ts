import {Component} from '@angular/core';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {TranslatePipe} from '@ngx-translate/core';
import {RolesTable} from '../../components/roles-table/roles-table';

@Component({
  selector: 'app-roles',
  imports: [
    SearchBar,
    RolesTable,
    TranslatePipe
  ],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {}
