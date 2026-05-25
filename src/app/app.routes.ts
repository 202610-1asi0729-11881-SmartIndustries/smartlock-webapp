import { Routes } from '@angular/router';
import {Layout} from './shared/presentation/component/layout/layout';
import {Home} from './shared/presentation/views/home/home';
import {OperationsLayout} from './shared/presentation/component/operations-layout/operations-layout';

const pageNotFound = () => import('./shared/presentation/views/page-not-found/page-not-found')
  .then(m => m.PageNotFound);


const baseTitle = "SmartLock";

export const routes: Routes = [
  { path: '', component: Layout, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: Home, title: `${baseTitle} - Home` },
      { path: 'operations', component: OperationsLayout, children: []},
      { path: '**', loadComponent: pageNotFound, title: `${baseTitle} - Page Not Found` },
    ]
  },
];
