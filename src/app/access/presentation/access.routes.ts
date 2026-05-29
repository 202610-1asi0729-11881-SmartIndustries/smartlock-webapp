import {Routes} from '@angular/router';

const rules = () => import('./views/rules/rules')
  .then(m => m.Rules);

const accessRoutes: Routes = [
  {path:'rules', loadComponent: rules},
]

export default accessRoutes;
