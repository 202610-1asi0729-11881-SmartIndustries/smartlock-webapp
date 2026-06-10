import {Injectable, signal} from '@angular/core';
import {AdministrationApi} from '../infrastructure/administration-api';
import {Administrator} from '../domain/model/administrator.entity';
import {Role} from '../domain/model/role.entity';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Injectable({providedIn: 'root'})
export class AdministrationStore {
  private readonly administratorsSignal = signal<Administrator[]>([]);
  readonly administrators = this.administratorsSignal.asReadonly();

  private readonly rolesSignal = signal<Role[]>([]);
  readonly roles = this.rolesSignal.asReadonly();

  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string|null>(null);
  readonly error = this.errorSignal.asReadonly();

  constructor(private administrationApi: AdministrationApi) {
    this.loadAdministrators();
    this.loadRoles();
  }

  private loadAdministrators(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.administrationApi.getAdministrators().pipe(takeUntilDestroyed()).subscribe({
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

  private loadRoles(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.administrationApi.getRoles().pipe(takeUntilDestroyed()).subscribe({
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
