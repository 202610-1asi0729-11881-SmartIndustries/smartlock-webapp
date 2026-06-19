import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {HttpClient} from '@angular/common/http';
import {OrganizationsApiEndpoint} from './organizations-api-endpoint';
import {SitesApiEndpoint} from './sites-api-endpoint';
import {DevicesApiEndpoint} from './devices-api-endpoint';
import {PeopleApiEndpoint} from './people-api-endpoint';
import {Observable} from 'rxjs';
import {Organization} from '../domain/model/organization.entity';
import {Site} from '../domain/model/site.entity';
import {Device} from '../domain/model/device.entity';
import {Person} from '../domain/model/person.entity';

@Injectable({providedIn: 'root'})
export class SpaceManagementApi extends BaseApi{
  private readonly organizationsEndpoint: OrganizationsApiEndpoint;
  private readonly sitesEndpoint: SitesApiEndpoint;
  private readonly devicesEndpoint: DevicesApiEndpoint;
  private readonly peopleEndpoint: PeopleApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.organizationsEndpoint = new OrganizationsApiEndpoint(http);
    this.sitesEndpoint = new SitesApiEndpoint(http);
    this.devicesEndpoint = new DevicesApiEndpoint(http);
    this.peopleEndpoint = new PeopleApiEndpoint(http);
  }

  getOrganizationsByUserId(userId: number): Observable<Organization[]>{
    return this.organizationsEndpoint.getByUserId(userId);
  }

  createOrganization(name: string, description: string): Observable<Organization> {
    return this.organizationsEndpoint.createOrganization(name, description);
  }

  getSitesByOrganizationId(organizationId: number): Observable<Site[]> {
    return this.sitesEndpoint.getByOrganizationId(organizationId);
  }

  createSite(organizationId: number, name: string, description: string): Observable<Site> {
    return this.sitesEndpoint.createSite(organizationId, name, description);
  }

  updateSite(siteId: number, name: string, description: string): Observable<Site> {
    return this.sitesEndpoint.updateSite(siteId, name, description);
  }

  deleteSite(siteId: number): Observable<void> {
    return this.sitesEndpoint.deleteSite(siteId);
  }

  getDevicesByOrganizationId(organizationId: number): Observable<Device[]> {
    return this.devicesEndpoint.getByOrganizationId(organizationId);
  }

  createDevice(siteId: number, name: string, mode: string): Observable<Device> {
    return this.devicesEndpoint.createDevice(siteId, name, mode);
  }

  updateDevice(deviceId: number, siteId: number, name: string, mode: string): Observable<Device> {
    return this.devicesEndpoint.updateDevice(deviceId, siteId, name, mode);
  }

  deleteDevice(deviceId: number): Observable<void> {
    return this.devicesEndpoint.deleteDevice(deviceId);
  }

  getPeopleByOrganizationId(organizationId: number): Observable<Person[]> {
    return this.peopleEndpoint.getByOrganizationId(organizationId);
  }

  createPerson(organizationId: number, firstName: string, lastName: string, identityDocument: string): Observable<Person> {
    return this.peopleEndpoint.createPerson(organizationId, firstName, lastName, identityDocument);
  }

  updatePerson(personId: number, firstName: string, lastName: string, identityDocument: string): Observable<Person> {
    return this.peopleEndpoint.updatePerson(personId, firstName, lastName, identityDocument);
  }

  deletePerson(personId: number): Observable<void> {
    return this.peopleEndpoint.deletePerson(personId);
  }
}