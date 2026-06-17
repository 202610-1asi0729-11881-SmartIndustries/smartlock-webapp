import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Organization} from '../domain/model/organization.entity';
import {OrganizationsResource, OrganizationsResponse} from './organizations-response';
import {OrganizationAssembler} from './organization-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {Observable, map} from 'rxjs';

export class OrganizationsApiEndpoint extends BaseApiEndpoint<Organization, OrganizationsResource, OrganizationsResponse, OrganizationAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.organizationsEndPointPath}`, new OrganizationAssembler());
  }

  getByUserId(userId: number): Observable<Organization[]> {
    return this.http.get<OrganizationsResource[]>(`${this.endpointUrl}?userId=${userId}`).pipe(
      map(resources => resources.map(r => this.assembler.toEntityFromResource(r)))
    );
  }

  createOrganization(name: string, description: string): Observable<Organization> {
    return this.http.post<OrganizationsResource>(this.endpointUrl, { name, description }).pipe(
      map(resource => this.assembler.toEntityFromResource(resource))
    );
  }
}
