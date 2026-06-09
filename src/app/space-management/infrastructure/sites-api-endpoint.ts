import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Site} from '../domain/model/site.entity';
import {SitesResource, SitesResponse} from './sites-response';
import {SiteAssembler} from './site-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

export class SitesApiEndpoint extends BaseApiEndpoint<Site, SitesResource, SitesResponse, SiteAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.sitesEndPointPath}`, new SiteAssembler());
  }
}
