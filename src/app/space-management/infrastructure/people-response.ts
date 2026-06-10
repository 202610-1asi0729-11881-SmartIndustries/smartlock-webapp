import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

export interface PeopleResource extends BaseResource {
  id: number;
  name: string;
  currentLocation: string;
  status: string;
}

export interface PeopleResponse extends BaseResponse {
  people: PeopleResource[];
}
