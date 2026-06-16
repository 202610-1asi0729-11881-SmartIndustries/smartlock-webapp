import { Injectable, inject, DestroyRef, signal, computed } from '@angular/core';
import { IamApi } from '../infrastructure/iam-api';
import { AuthenticatedUser } from '../domain/model/authenticated-user.entity';
import { User } from '../domain/model/user.entity';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

const TOKEN_KEY = 'smartlock-token';
const USER_KEY = 'smartlock-user';

@Injectable({ providedIn: 'root' })
export class IamStore {
  private readonly destroy$ = new Subject<void>();

  private readonly currentUserSignal = signal<AuthenticatedUser | null>(null);
  readonly currentUser = this.currentUserSignal.asReadonly();

  readonly isAuthenticated = computed(() => this.currentUserSignal() !== null);

  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string | null>(null);
  readonly error = this.errorSignal.asReadonly();

  private readonly successMessageSignal = signal<string | null>(null);
  readonly successMessage = this.successMessageSignal.asReadonly();

  constructor(
    private iamApi: IamApi,
    private router: Router
  ) {
    inject(DestroyRef).onDestroy(() => {
      this.destroy$.next();
      this.destroy$.complete();
    });
    this.restoreSession();
  }

  signIn(email: string, password: string): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.successMessageSignal.set(null);

    this.iamApi.signIn(email, password).pipe(takeUntil(this.destroy$)).subscribe({
      next: (user) => {
        this.persistSession(user);
        this.currentUserSignal.set(user);
        this.loadingSignal.set(false);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to sign in'));
        this.loadingSignal.set(false);
      },
    });
  }

  signUp(firstName: string, lastName: string, email: string, password: string): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.successMessageSignal.set(null);

    this.iamApi.signUp(firstName, lastName, email, password).pipe(takeUntil(this.destroy$)).subscribe({
      next: (_user: User) => {
        this.loadingSignal.set(false);
        this.successMessageSignal.set('Account created successfully. Please sign in.');
        this.router.navigate(['/auth/sign-in']);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to sign up'));
        this.loadingSignal.set(false);
      },
    });
  }

  signOut(): void {
    this.clearSession();
    this.currentUserSignal.set(null);
    this.router.navigate(['/auth/sign-in']);
  }

  getToken(): string | null {
    const user = this.currentUserSignal();
    return user?.token ?? localStorage.getItem(TOKEN_KEY);
  }

  private persistSession(user: AuthenticatedUser): void {
    localStorage.setItem(TOKEN_KEY, user.token);
    localStorage.setItem(USER_KEY, JSON.stringify({ id: user.id, firstName: user.firstName, lastName: user.lastName }));
  }

  private restoreSession(): void {
    const token = localStorage.getItem(TOKEN_KEY);
    const userJson = localStorage.getItem(USER_KEY);
    if (token && userJson) {
      try {
        const parsed = JSON.parse(userJson);
        this.currentUserSignal.set(
          new AuthenticatedUser(parsed.id, parsed.firstName, parsed.lastName, token)
        );
      } catch {
        this.clearSession();
      }
    }
  }

  private clearSession(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  private formatError(error: any, fallback: string): string {
    if (error?.error?.message) {
      return error.error.message;
    }
    if (error instanceof Error) {
      return error.message;
    }
    return fallback;
  }
}
