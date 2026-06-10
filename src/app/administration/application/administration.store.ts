import {Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AdministrationStore {
  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string|null>(null);
  readonly error = this.errorSignal.asReadonly();
}
