import {Component} from '@angular/core';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {TranslatePipe} from '@ngx-translate/core';
import {SitesTable} from '../../components/sites-table/sites-table';

@Component({
  selector: 'app-sites',
  imports: [
    SearchBar,
    SitesTable,
    TranslatePipe
  ],
  templateUrl: './sites.html',
  styleUrl: './sites.css',
})
export class Sites {}
