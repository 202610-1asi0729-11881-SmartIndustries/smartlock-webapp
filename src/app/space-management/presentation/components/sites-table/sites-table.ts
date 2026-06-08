import {Component} from '@angular/core';
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
import {TranslatePipe} from '@ngx-translate/core';

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
    TranslatePipe
  ],
  templateUrl: './sites-table.html',
  styleUrl: './sites-table.css',
})
export class SitesTable {
  protected sites: {id: number, name: string}[] = [
    {id: 1, name: 'North Campus'},
    {id: 2, name: 'South Campus'},
    {id: 3, name: 'Downtown Office'},
    {id: 4, name: 'Warehouse A'},
  ];
  protected sitesColumns: string[] = ['id', 'name'];
}
