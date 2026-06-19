import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { SitesTable } from '../../components/sites-table/sites-table';
import { CreateSiteForm } from '../../components/create-site-form/create-site-form';
import { SpaceManagementStore } from '../../../application/space-management.store';

@Component({
  selector: 'app-sites',
  imports: [
    SitesTable,
    TranslatePipe,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './sites.html',
  styleUrl: './sites.css',
})
export class Sites {
  protected readonly store = inject(SpaceManagementStore);
  protected readonly dialog = inject(MatDialog);

  protected openCreateSiteForm(): void {
    this.dialog.open(CreateSiteForm);
  }
}