import { Component } from '@angular/core';
import { HeaderBar } from '../header-bar/header-bar';
import { OrganizationsList } from '../../../../space-management/presentation/views/organizations-list/organizations-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
