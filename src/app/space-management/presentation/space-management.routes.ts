import {Routes} from '@angular/router';

const dashBoard = () => import('./views/dashboard/dashboard')
  .then(m => m.Dashboard);
const people = () => import('./views/people/people')
  .then(m => m.People);
const devices = () => import('./views/devices/devices')
  .then(m => m.Devices);
const administrators = () => import('./views/administrators/administrators')
  .then(m => m.Administrators);

const spaceManagementRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'people', loadComponent: people },
  { path: 'dashboard', loadComponent: dashBoard },
  { path: 'devices', loadComponent: devices },
  { path: 'administrators', loadComponent: administrators },
]

export default spaceManagementRoutes;
