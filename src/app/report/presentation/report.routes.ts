import {Routes} from '@angular/router';
const audit = () => import('./views/audit/audit')
  .then(m => m.Audit);
const reportRoutes: Routes = [
  {path:'audit', loadComponent: audit},
]

export default reportRoutes;
