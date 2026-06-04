import {Routes} from '@angular/router';

const roles = () => import('./views/roles/roles')
  .then(m => m.Roles);

const administrationRoutes: Routes = [
  { path: 'roles', loadComponent: roles}
]

export default administrationRoutes;
