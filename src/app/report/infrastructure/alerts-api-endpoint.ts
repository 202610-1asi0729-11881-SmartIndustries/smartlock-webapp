import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Alert} from '../domain/model/alert.entity';
import {AlertsResource, AlertsResponse} from './alerts-response';
import {AlertAssembler} from './alert-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

export class AlertsApiEndpoint extends BaseApiEndpoint<Alert, AlertsResource, AlertsResponse, AlertAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.alertsEndPointPath}`, new AlertAssembler());
  }
}
