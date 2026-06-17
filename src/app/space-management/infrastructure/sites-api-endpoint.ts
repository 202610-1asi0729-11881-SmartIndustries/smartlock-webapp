import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Site} from '../domain/model/site.entity';
import {SitesResource, SitesResponse} from './sites-response';
import {SiteAssembler} from './site-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {Observable, map} from 'rxjs';

export class SitesApiEndpoint extends BaseApiEndpoint<Site, SitesResource, SitesResponse, SiteAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.sitesEndPointPath}`, new SiteAssembler());
  }

  getByOrganizationId(organizationId: number): Observable<Site[]> {
    return this.http.get<SitesResource[]>(`${this.endpointUrl}?organizationId=${organizationId}`).pipe(
      map(resources => resources.map(r => this.assembler.toEntityFromResource(r)))
    );
  }

  createSite(organizationId: number, name: string, description: string): Observable<Site> {
    return this.http.post<SitesResource>(this.endpointUrl, { organizationId, name, description }).pipe(
      map(resource => this.assembler.toEntityFromResource(resource))
    );
  }
}
