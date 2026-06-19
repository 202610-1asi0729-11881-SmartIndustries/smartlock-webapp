import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {AdministratorsTable} from '../../components/administrators-table/administrators-table';
import {InviteAdministratorForm} from '../../components/invite-administrator-form/invite-administrator-form';
import {TranslatePipe} from '@ngx-translate/core';
import {AdministrationStore} from '../../../application/administration.store';

@Component({
  selector: 'app-administrators',
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatIcon,
    MatIconButton,
    AdministratorsTable,
    TranslatePipe
  ],
  templateUrl: './administrators.html',
  styleUrl: './administrators.css',
})
export class Administrators {
  protected readonly dialog = inject(MatDialog);
  protected readonly store = inject(AdministrationStore);

  protected rolesOptions: String[] = ["Operator", "Root"];

  protected openInviteAdministratorForm() {
    this.dialog.open(InviteAdministratorForm);
  }
}
