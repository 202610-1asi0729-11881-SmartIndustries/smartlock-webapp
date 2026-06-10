import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface DevicesResource extends BaseResource {
  id: number;
  name: string;
  site: string;
  mode: string;
  status: string;
}

export interface DevicesResponse extends BaseResponse {
  devices: DevicesResource[];
}
