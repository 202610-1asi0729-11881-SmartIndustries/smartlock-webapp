import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Administrator} from '../domain/model/administrator.entity';
import {AdministratorsResource, AdministratorsResponse} from './administrators-response';

export class AdministratorAssembler implements BaseAssembler<Administrator, AdministratorsResource, AdministratorsResponse> {
  toEntitiesFromResponse(response: AdministratorsResponse): Administrator[] {
    return response.administrators.map(resource => this.toEntityFromResource(resource as AdministratorsResource));
  }

  toEntityFromResource(resource: AdministratorsResource): Administrator {
    return new Administrator(resource.id, resource.name, resource.role, resource.status);
  }

  toResourceFromEntity(entity: Administrator): AdministratorsResource {
    return {id: entity.id, name: entity.name, role: entity.role, status: entity.status} as AdministratorsResource;
  }
}
