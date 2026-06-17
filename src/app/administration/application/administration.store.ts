import { Injectable, inject, DestroyRef, signal, effect } from '@angular/core';
import { AdministrationApi } from '../infrastructure/administration-api';
import { Administrator } from '../domain/model/administrator.entity';
import { Role } from '../domain/model/role.entity';
import { SpaceManagementStore } from '../../space-management/application/space-management.store';
import { Subject, takeUntil } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdministrationStore {
  private readonly destroy$ = new Subject<void>();

  private readonly administratorsSignal = signal<Administrator[]>([]);
  readonly administrators = this.administratorsSignal.asReadonly();

  private readonly rolesSignal = signal<Role[]>([]);
  readonly roles = this.rolesSignal.asReadonly();

  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string | null>(null);
  readonly error = this.errorSignal.asReadonly();

  constructor(
    private administrationApi: AdministrationApi,
    private spaceManagementStore: SpaceManagementStore
  ) {
    inject(DestroyRef).onDestroy(() => {
      this.destroy$.next();
      this.destroy$.complete();
    });
    this.loadAdministrators();

    effect(() => {
      const orgId = this.spaceManagementStore.selectedOrganizationId();
      if (orgId) {
        this.loadRoles(orgId);
      }
    });
  }

  private loadAdministrators(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.administrationApi.getAdministrators().pipe(takeUntil(this.destroy$)).subscribe({
      next: administrators => {
        this.administratorsSignal.set(administrators);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load administrators'));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadRoles(organizationId: number): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.administrationApi.getRolesByOrganizationId(organizationId).pipe(takeUntil(this.destroy$)).subscribe({
      next: roles => {
        this.rolesSignal.set(roles);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load roles'));
        this.loadingSignal.set(false);
      }
    });
  }

  private formatError(error: any, fallback: string): string {
    if (error instanceof Error) {
      return error.message.includes('Resource not found') ? `${fallback}: Not found` : error.message;
    }
    return fallback;
  }
}