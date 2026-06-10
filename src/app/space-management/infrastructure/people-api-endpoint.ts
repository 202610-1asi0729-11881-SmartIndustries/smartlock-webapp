import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Person} from '../domain/model/person.entity';
import {PeopleResource, PeopleResponse} from './people-response';
import {PersonAssembler} from './person-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

export class PeopleApiEndpoint extends BaseApiEndpoint<Person, PeopleResource, PeopleResponse, PersonAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.peopleEndPointPath}`, new PersonAssembler());
  }
}
