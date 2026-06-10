import {Component, inject} from '@angular/core';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {TranslatePipe} from '@ngx-translate/core';
import {SitesTable} from '../../components/sites-table/sites-table';
import {SpaceManagementStore} from '../../../application/space-management.store';

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
export class Sites {
  protected readonly store = inject(SpaceManagementStore);
}
