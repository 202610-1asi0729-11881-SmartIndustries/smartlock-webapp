import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Role} from '../domain/model/role.entity';
import {RolesResource, RolesResponse} from './roles-response';
import {RoleAssembler} from './role-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

export class RolesApiEndpoint extends BaseApiEndpoint<Role, RolesResource, RolesResponse, RoleAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.rolesEndPointPath}`, new RoleAssembler());
  }
}
