import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {HttpClient} from '@angular/common/http';
import {OrganizationsApiEndpoint} from './organizations-api-endpoint';
import {SitesApiEndpoint} from './sites-api-endpoint';
import {Observable} from 'rxjs';
import {Organization} from '../domain/model/organization.entity';
import {Site} from '../domain/model/site.entity';

@Injectable({providedIn: 'root'})
export class SpaceManagementApi extends BaseApi{
  private readonly organizationsEndpoint: OrganizationsApiEndpoint;
  private readonly sitesEndpoint: SitesApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.organizationsEndpoint = new OrganizationsApiEndpoint(http);
    this.sitesEndpoint = new SitesApiEndpoint(http);
  }

  getOrganizations(): Observable<Organization[]>{
    return this.organizationsEndpoint.getAll();
  }

  getSites(): Observable<Site[]> {
    return this.sitesEndpoint.getAll();
  }
}
