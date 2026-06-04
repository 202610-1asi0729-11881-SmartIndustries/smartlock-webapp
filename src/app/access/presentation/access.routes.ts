import {Routes} from '@angular/router';

const accessGroups = () => import('./views/access-groups/access-groups')
  .then(m => m.AccessGroups);

const accessRoutes: Routes = [
  {path:'access-groups', loadComponent: accessGroups},
]

export default accessRoutes;
