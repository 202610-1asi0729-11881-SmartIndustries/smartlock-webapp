import {Component, inject, input} from '@angular/core';
import {Router} from '@angular/router';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {TranslatePipe} from '@ngx-translate/core';
import {DeleteOrganizationDialog} from '../delete-organization-form/delete-organization-form';
import {SpaceManagementStore} from '../../../application/space-management.store';

@Component({
  selector: 'app-organization-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    TranslatePipe
  ],
  templateUrl: './organization-card.html',
  styleUrl: './organization-card.css',
})
export class OrganizationCard {
  protected readonly dialog = inject(MatDialog);
  protected readonly store = inject(SpaceManagementStore);
  protected readonly router = inject(Router);
  organization = input.required<{id: number, name: string, ownerName: string, description: string}>();

  protected openDeleteDialog() {
    this.dialog.open(DeleteOrganizationDialog, {
      data: this.organization().name,
    });
  }

  protected openOrganization(): void {
    const org = this.organization();
    this.store.selectOrganization(org.id);
    this.router.navigate(['/operations']);
  }
}
