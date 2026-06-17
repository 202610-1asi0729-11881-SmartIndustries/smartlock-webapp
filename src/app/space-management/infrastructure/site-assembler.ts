import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Site} from '../domain/model/site.entity';
import {SitesResource, SitesResponse} from './sites-response';

export class SiteAssembler implements BaseAssembler<Site, SitesResource, SitesResponse> {
  toEntitiesFromResponse(response: SitesResponse): Site[] {
    return response.sites.map(resource => this.toEntityFromResource(resource as SitesResource));
  }

  toEntityFromResource(resource: SitesResource): Site {
    return new Site(resource.id, resource.organizationId, resource.name, resource.description);
  }

  toResourceFromEntity(entity: Site): SitesResource {
    return {
      id: entity.id,
      organizationId: entity.organizationId,
      name: entity.name,
      description: entity.description
    } as SitesResource;
  }
}
