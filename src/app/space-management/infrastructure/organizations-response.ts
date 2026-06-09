import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface OrganizationsResource extends BaseResource {
  id: number;
  name: string;
  owner: string;
  description: string;
}

export interface OrganizationsResponse extends BaseResponse {
  organizations: OrganizationsResource[];
}
