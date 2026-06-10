import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface AlertsResource extends BaseResource {
  id: number;
  location: string;
  person: string;
  status: string;
  date: string;
}

export interface AlertsResponse extends BaseResponse {
  alerts: AlertsResource[];
}
