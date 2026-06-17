import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface SitesResource extends BaseResource {
  id: number;
  organizationId: number;
  name: string;
  description: string;
}

export interface SitesResponse extends BaseResponse {
  sites: SitesResource[];
}
