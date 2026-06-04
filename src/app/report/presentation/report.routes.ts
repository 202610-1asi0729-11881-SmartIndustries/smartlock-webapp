import {Routes} from '@angular/router';
const accessEvents = () => import('./views/access-events/access-events')
  .then(m => m.AccessEvents);
const alerts = () => import('./views/alerts/alerts')
  .then(m => m.Alerts);

const reportRoutes: Routes = [
  {path:'access-events', loadComponent: accessEvents},
  {path:'alerts', loadComponent: alerts},
]

export default reportRoutes;
