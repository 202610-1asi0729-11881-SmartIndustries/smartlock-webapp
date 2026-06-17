import { Injectable, inject, DestroyRef, signal } from '@angular/core';
import { SpaceManagementApi } from '../infrastructure/space-management-api';
import { Organization } from '../domain/model/organization.entity';
import { Site } from '../domain/model/site.entity';
import { Device } from '../domain/model/device.entity';
import { Person } from '../domain/model/person.entity';
import { IamStore } from '../../iam/application/iam.store';
import { Subject, takeUntil } from 'rxjs';

const SELECTED_ORG_KEY = 'smartlock-selected-org';

@Injectable({ providedIn: 'root' })
export class SpaceManagementStore {

  private readonly destroy$ = new Subject<void>();

  private readonly organizationsSignal = signal<Organization[]>([]);
  readonly organizations = this.organizationsSignal.asReadonly();

  private readonly sitesSignal = signal<Site[]>([]);
  readonly sites = this.sitesSignal.asReadonly();

  private readonly devicesSignal = signal<Device[]>([]);
  readonly devices = this.devicesSignal.asReadonly();

  private readonly peopleSignal = signal<Person[]>([]);
  readonly people = this.peopleSignal.asReadonly();

  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string | null>(null);

  private readonly selectedOrganizationIdSignal = signal<number | null>(null);
  readonly selectedOrganizationId = this.selectedOrganizationIdSignal.asReadonly();

  constructor(
    private spaceManagementApi: SpaceManagementApi,
    private iamStore: IamStore
  ) {
    inject(DestroyRef).onDestroy(() => {
      this.destroy$.next();
      this.destroy$.complete();
    });
    this.loadOrganizations();
  }

  selectOrganization(organizationId: number): void {
    this.selectedOrganizationIdSignal.set(organizationId);
    localStorage.setItem(SELECTED_ORG_KEY, String(organizationId));
    this.loadSites(organizationId);
    this.loadPeople(organizationId);
    this.loadDevices(organizationId);
  }

  createOrganization(name: string, description: string): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.spaceManagementApi.createOrganization(name, description).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
        this.loadOrganizations();
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to create organization'));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadOrganizations(): void {
    const userId = this.iamStore.currentUser()?.id;
    if (!userId) return;

    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.spaceManagementApi.getOrganizationsByUserId(userId).pipe(takeUntil(this.destroy$)).subscribe({
      next: organizations => {
        this.organizationsSignal.set(organizations);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
        const savedOrgId = localStorage.getItem(SELECTED_ORG_KEY);
        if (savedOrgId) {
          this.selectOrganization(Number(savedOrgId));
        }
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load organizations'));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadSites(organizationId: number): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.spaceManagementApi.getSitesByOrganizationId(organizationId).pipe(takeUntil(this.destroy$)).subscribe({
      next: sites => {
        this.sitesSignal.set(sites);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load sites'));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadDevices(organizationId: number): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.spaceManagementApi.getDevicesByOrganizationId(organizationId).pipe(takeUntil(this.destroy$)).subscribe({
      next: devices => {
        this.devicesSignal.set(devices);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load devices'));
        this.loadingSignal.set(false);
      }
    });
  }

  private loadPeople(organizationId: number): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.spaceManagementApi.getPeopleByOrganizationId(organizationId).pipe(takeUntil(this.destroy$)).subscribe({
      next: people => {
        this.peopleSignal.set(people);
        this.loadingSignal.set(false);
        this.errorSignal.set(null);
      },
      error: err => {
        this.errorSignal.set(this.formatError(err, 'Failed to load people'));
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
