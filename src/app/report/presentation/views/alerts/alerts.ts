import {Component, inject} from '@angular/core';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {TranslatePipe} from '@ngx-translate/core';
import {AlertsTable} from '../../components/alerts-table/alerts-table';
import {ReportStore} from '../../../application/report.store';

@Component({
  selector: 'app-alerts',
  imports: [
    SearchBar,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    AlertsTable,
    TranslatePipe
  ],
  templateUrl: './alerts.html',
  styleUrl: './alerts.css',
})
export class Alerts {
  protected readonly store = inject(ReportStore);
  protected siteOptions: string[] = ['All', 'North Campus', 'South Campus', 'Downtown'];
  protected statusOptions: string[] = ['All', 'Active', 'Resolved'];
}
