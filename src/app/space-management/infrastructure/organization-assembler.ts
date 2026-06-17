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
      resource.ownerName ?? '',
      resource.description
    );
  }

  toResourceFromEntity(entity: Organization): OrganizationsResource {
    return {
      id: entity.id,
      name: entity.name,
      ownerName: entity.ownerName,
      description: entity.description
    } as OrganizationsResource;
  }
}
