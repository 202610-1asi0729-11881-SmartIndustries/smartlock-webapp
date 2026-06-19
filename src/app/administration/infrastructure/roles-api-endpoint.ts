import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Role} from '../domain/model/role.entity';
import {RolesResource, RolesResponse} from './roles-response';
import {RoleAssembler} from './role-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, map} from 'rxjs';

export class RolesApiEndpoint extends BaseApiEndpoint<Role, RolesResource, RolesResponse, RoleAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.rolesEndPointPath}`, new RoleAssembler());
  }

  getByOrganizationId(organizationId: number): Observable<Role[]> {
    return this.http.get<RolesResource[]>(`${this.endpointUrl}?organizationId=${organizationId}`).pipe(
      map(resources => resources.map(r => this.assembler.toEntityFromResource(r)))
    );
  }

  createRole(organizationId: number, name: string, canCreateSites: boolean, canCreatePeople: boolean, canConnectDevices: boolean): Observable<Role> {
    return this.http.post<RolesResource>(this.endpointUrl, { organizationId, name, canCreateSites, canCreatePeople, canConnectDevices }).pipe(
      map(resource => this.assembler.toEntityFromResource(resource))
    );
  }

  updateRole(roleId: number, name: string, canCreateSites: boolean, canCreatePeople: boolean, canConnectDevices: boolean): Observable<Role> {
    return this.http.put<RolesResource>(`${this.endpointUrl}/${roleId}`, { name, canCreateSites, canCreatePeople, canConnectDevices }).pipe(
      map(resource => this.assembler.toEntityFromResource(resource))
    );
  }
}