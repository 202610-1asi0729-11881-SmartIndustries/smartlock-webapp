import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {AccessEventsTable} from '../../components/access-events-table/access-events-table';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {ReportStore} from '../../../application/report.store';

@Component({
  selector: 'app-access-events',
  imports: [
    SearchBar,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatIcon,
    MatIconButton,
    AccessEventsTable,
    SearchBar
  ],
  templateUrl: './access-events.html',
  styleUrl: './access-events.css',
})
export class AccessEvents {
  protected readonly store = inject(ReportStore);
  protected typeOptions: string[] = ['Access attempt', 'Alert'];
  protected statusOptions: string[] = ['Accepted', 'Rejected', 'Resolved'];
}
