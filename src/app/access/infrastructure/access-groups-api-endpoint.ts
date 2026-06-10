import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {AccessGroup} from '../domain/model/access-group.entity';
import {AccessGroupsResource, AccessGroupsResponse} from './access-groups-response';
import {AccessGroupAssembler} from './access-group-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

export class AccessGroupsApiEndpoint extends BaseApiEndpoint<AccessGroup, AccessGroupsResource, AccessGroupsResponse, AccessGroupAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.accessGroupsEndPointPath}`, new AccessGroupAssembler());
  }
}
