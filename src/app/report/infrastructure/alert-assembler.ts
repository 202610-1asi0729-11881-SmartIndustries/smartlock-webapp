import {BaseAssembler} from '../../shared/infrastructure/base-assembler';
import {Alert} from '../domain/model/alert.entity';
import {AlertsResource, AlertsResponse} from './alerts-response';

export class AlertAssembler implements BaseAssembler<Alert, AlertsResource, AlertsResponse> {
  toEntitiesFromResponse(response: AlertsResponse): Alert[] {
    return response.alerts.map(resource => this.toEntityFromResource(resource as AlertsResource));
  }

  toEntityFromResource(resource: AlertsResource): Alert {
    return new Alert(resource.id, resource.location, resource.person, resource.status, resource.date);
  }

  toResourceFromEntity(entity: Alert): AlertsResource {
    return {id: entity.id, location: entity.location, person: entity.person, status: entity.status, date: entity.date} as AlertsResource;
  }
}
