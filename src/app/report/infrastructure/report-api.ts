import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {HttpClient} from '@angular/common/http';
import {AccessEventsApiEndpoint} from './access-events-api-endpoint';
import {AlertsApiEndpoint} from './alerts-api-endpoint';
import {Observable} from 'rxjs';
import {AccessEvent} from '../domain/model/access-event.entity';
import {Alert} from '../domain/model/alert.entity';

@Injectable({providedIn: 'root'})
export class ReportApi extends BaseApi {
  private readonly accessEventsEndpoint: AccessEventsApiEndpoint;
  private readonly alertsEndpoint: AlertsApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.accessEventsEndpoint = new AccessEventsApiEndpoint(http);
    this.alertsEndpoint = new AlertsApiEndpoint(http);
  }

  getAccessEvents(): Observable<AccessEvent[]> {
    return this.accessEventsEndpoint.getAll();
  }

  getAlerts(): Observable<Alert[]> {
    return this.alertsEndpoint.getAll();
  }
}
