import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {HttpClient} from '@angular/common/http';
import {AdministratorsApiEndpoint} from './administrators-api-endpoint';
import {RolesApiEndpoint} from './roles-api-endpoint';
import {Observable} from 'rxjs';
import {Administrator} from '../domain/model/administrator.entity';
import {Role} from '../domain/model/role.entity';

@Injectable({providedIn: 'root'})
export class AdministrationApi extends BaseApi {
  private readonly administratorsEndpoint: AdministratorsApiEndpoint;
  private readonly rolesEndpoint: RolesApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.administratorsEndpoint = new AdministratorsApiEndpoint(http);
    this.rolesEndpoint = new RolesApiEndpoint(http);
  }

  getAdministrators(): Observable<Administrator[]> {
    return this.administratorsEndpoint.getAll();
  }

  getRolesByOrganizationId(organizationId: number): Observable<Role[]> {
    return this.rolesEndpoint.getByOrganizationId(organizationId);
  }
}
