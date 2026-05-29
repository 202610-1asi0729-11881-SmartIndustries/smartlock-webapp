import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {RulesTable} from '../../components/rules-table/rules-table';
import {SearchBar} from '../../../../shared/presentation/component/search-bar/search-bar';
import {CreateRuleForm} from '../../components/create-rule-form/create-rule-form';

@Component({
  selector: 'app-rules',
  imports: [
    SearchBar,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    MatIcon,
    MatIconButton,
    RulesTable,
    SearchBar,
  ],
  templateUrl: './rules.html',
  styleUrl: './rules.css',
})
export class Rules {
  protected readonly dialog = inject(MatDialog);

  protected siteOptions: string[] = ['all','North campus', 'East campus', 'West campus'];
  protected statusOptions: string[] = ['Active', 'Disabled'];

  protected openCreateRuleForm() {
    this.dialog.open(CreateRuleForm);
  }
}
