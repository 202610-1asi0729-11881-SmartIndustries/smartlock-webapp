import { Component, inject, input } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
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
import { TranslatePipe } from '@ngx-translate/core';
import { Site } from '../../../domain/model/site.entity';
import { CreateSiteForm } from '../create-site-form/create-site-form';
import { SpaceManagementStore } from '../../../application/space-management.store';

@Component({
  selector: 'app-sites-table',
  imports: [
    MatTable,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    TranslatePipe
  ],
  templateUrl: './sites-table.html',
  styleUrl: './sites-table.css',
})
export class SitesTable {
  sites = input<Site[]>([]);
  protected sitesColumns: string[] = ['id', 'name', 'actions'];

  private readonly dialog = inject(MatDialog);
  private readonly store = inject(SpaceManagementStore);

  protected editSite(site: Site): void {
    this.dialog.open(CreateSiteForm, { data: site });
  }

  protected deleteSite(site: Site): void {
    this.store.deleteSite(site.id);
  }
}