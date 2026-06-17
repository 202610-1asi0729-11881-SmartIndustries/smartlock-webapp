import { Injectable, inject, DestroyRef, signal, effect } from '@angular/core';
import { AccessApi } from '../infrastructure/access-api';
import { AccessGroup } from '../domain/model/access-group.entity';
import { SpaceManagementStore } from '../../space-management/application/space-management.store';
import { Subject, takeUntil } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccessStore {
  private readonly destroy$ = new Subject<void>();

  private readonly accessGroupsSignal = signal<AccessGroup[]>([]);
  readonly accessGroups = this.accessGroupsSignal.asReadonly();

  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string | null>(null);
  readonly error = this.errorSignal.asReadonly();

  constructor(
    private accessApi: AccessApi,
    private spaceManagementStore: SpaceManagementStore
  ) {
    inject(DestroyRef).onDestroy(() => {
      this.destroy$.next();
      this.destroy$.complete();
    });

    effect(() => {
      const orgId = this.spaceManagementStore.selectedOrganizationId();
      if (orgId) {
        this.loadAccessGroups(orgId);
      }
    });
  }

  createAccessGroup(name: string, description: string): void {
    const orgId = this.spaceManagementStore.selectedOrganizationId();
    if (!orgId) return;

    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.accessApi.createAccessGroup(orgId, name, description).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
        this.loadAccessGroups(orgId);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to create access group'));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadAccessGroups(organizationId: number): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.accessApi.getAccessGroupsByOrganizationId(organizationId).pipe(takeUntil(this.destroy$)).subscribe({
      next: accessGroups => {
        this.accessGroupsSignal.set(accessGroups);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load access groups'));
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