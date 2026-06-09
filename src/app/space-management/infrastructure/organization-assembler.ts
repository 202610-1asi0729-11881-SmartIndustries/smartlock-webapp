import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Organization} from '../domain/model/organization.entity';
import {OrganizationsResource, OrganizationsResponse} from './organizations-response';

export class OrganizationAssembler implements BaseAssembler<Organization, OrganizationsResource, OrganizationsResponse> {
  toEntitiesFromResponse(response:OrganizationsResponse): Organization[] {
    return response.organizations.map(resource => this.toEntityFromResource(resource as OrganizationsResource));
  }

  toEntityFromResource(resource: OrganizationsResource): Organization {
    return new Organization(
      resource.id,
      resource.name,
      resource.owner,
      resource.description
    );
  }

  toResourceFromEntity(entity: Organization): OrganizationsResource {
    return {
      id: entity.id,
      name: entity.name,
      owner: entity.owner,
      description: entity.description
    } as OrganizationsResource;
  }
}
