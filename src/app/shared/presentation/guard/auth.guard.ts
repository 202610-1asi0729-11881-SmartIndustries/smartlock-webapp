import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IamStore } from '../../../iam/application/iam.store';

export const authGuard: CanActivateFn = () => {
  const store = inject(IamStore);
  const router = inject(Router);

  if (store.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/auth/sign-in']);
};
