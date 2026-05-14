import { Routes } from '@angular/router';
import { OrganizationsList } from './space-management/presentation/views/organizations-list/organizations-list';

export const routes: Routes = [
  { path: 'organizations', component: OrganizationsList },
  { path: '', redirectTo: 'organizations', pathMatch: 'full' },
];
