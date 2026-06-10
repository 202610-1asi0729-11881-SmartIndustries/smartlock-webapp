import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Role} from '../domain/model/role.entity';
import {RolesResource, RolesResponse} from './roles-response';

export class RoleAssembler implements BaseAssembler<Role, RolesResource, RolesResponse> {
  toEntitiesFromResponse(response: RolesResponse): Role[] {
    return response.roles.map(resource => this.toEntityFromResource(resource as RolesResource));
  }

  toEntityFromResource(resource: RolesResource): Role {
    return new Role(resource.id, resource.name);
  }

  toResourceFromEntity(entity: Role): RolesResource {
    return {id: entity.id, name: entity.name} as RolesResource;
  }
}
