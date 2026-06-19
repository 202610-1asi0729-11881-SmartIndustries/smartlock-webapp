import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Person} from '../domain/model/person.entity';
import {PeopleResource, PeopleResponse} from './people-response';
import {PersonAssembler} from './person-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, map} from 'rxjs';

export class PeopleApiEndpoint extends BaseApiEndpoint<Person, PeopleResource, PeopleResponse, PersonAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.peopleEndPointPath}`, new PersonAssembler());
  }

  getByOrganizationId(organizationId: number): Observable<Person[]> {
    return this.http.get<PeopleResource[]>(`${this.endpointUrl}?organizationId=${organizationId}`).pipe(
      map(resources => resources.map(r => this.assembler.toEntityFromResource(r)))
    );
  }

  createPerson(organizationId: number, firstName: string, lastName: string, identityDocument: string): Observable<Person> {
    return this.http.post<PeopleResource>(this.endpointUrl, { organizationId, firstName, lastName, identityDocument }).pipe(
      map(resource => this.assembler.toEntityFromResource(resource))
    );
  }

  updatePerson(personId: number, firstName: string, lastName: string, identityDocument: string): Observable<Person> {
    return this.http.put<PeopleResource>(`${this.endpointUrl}/${personId}`, { firstName, lastName, identityDocument }).pipe(
      map(resource => this.assembler.toEntityFromResource(resource))
    );
  }

  deletePerson(personId: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${personId}`);
  }
}