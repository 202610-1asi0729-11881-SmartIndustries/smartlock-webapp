import { Routes } from '@angular/router';
import { Layout } from './shared/presentation/component/layout/layout';
import { Home } from './shared/presentation/views/home/home';
import { OperationsLayout } from './shared/presentation/component/operations-layout/operations-layout';
import { authGuard } from './shared/presentation/guard/auth.guard';
import spaceManagementRoutes from './space-management/presentation/space-management.routes';
import accessRoutes from './access/presentation/access.routes';
import reportRoutes from './report/presentation/report.routes';
import administrationRoutes from './administration/presentation/administration.routes';
import iamRoutes from './iam/presentation/iam.routes';

const pageNotFound = () =>
  import('./shared/presentation/views/page-not-found/page-not-found').then((m) => m.PageNotFound);

const baseTitle = 'SmartLock';

const operationRoutes: Routes = [
  ...spaceManagementRoutes,
  ...accessRoutes,
  ...reportRoutes,
  ...administrationRoutes,
];

export const routes: Routes = [
  {
    path: 'auth',
    children: iamRoutes,
  },
  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: Home, title: `${baseTitle} - Home` },
      { path: 'operations', component: OperationsLayout, children: operationRoutes },
      { path: '**', loadComponent: pageNotFound, title: `${baseTitle} - Page Not Found` },
    ],
  },
];
