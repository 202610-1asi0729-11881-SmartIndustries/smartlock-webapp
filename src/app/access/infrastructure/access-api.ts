import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {HttpClient} from '@angular/common/http';
import {AccessGroupsApiEndpoint} from './access-groups-api-endpoint';
import {Observable} from 'rxjs';
import {AccessGroup} from '../domain/model/access-group.entity';

@Injectable({providedIn: 'root'})
export class AccessApi extends BaseApi {
  private readonly accessGroupsEndpoint: AccessGroupsApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.accessGroupsEndpoint = new AccessGroupsApiEndpoint(http);
  }

  getAccessGroups(): Observable<AccessGroup[]> {
    return this.accessGroupsEndpoint.getAll();
  }
}
