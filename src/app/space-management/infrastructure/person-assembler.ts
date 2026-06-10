import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Person} from '../domain/model/person.entity';
import {PeopleResource, PeopleResponse} from './people-response';

export class PersonAssembler implements BaseAssembler<Person, PeopleResource, PeopleResponse> {
  toEntitiesFromResponse(response: PeopleResponse): Person[] {
    return response.people.map(resource => this.toEntityFromResource(resource as PeopleResource));
  }

  toEntityFromResource(resource: PeopleResource): Person {
    return new Person(resource.id, resource.name, resource.currentLocation, resource.status);
  }

  toResourceFromEntity(entity: Person): PeopleResource {
    return {id: entity.id, name: entity.name, currentLocation: entity.currentLocation, status: entity.status} as PeopleResource;
  }
}
