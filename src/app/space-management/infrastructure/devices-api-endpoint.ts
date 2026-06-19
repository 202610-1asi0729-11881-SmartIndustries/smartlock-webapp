import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
import {Device} from '../domain/model/device.entity';
import {DevicesResource, DevicesResponse} from './devices-response';
import {DeviceAssembler} from './device-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, map} from 'rxjs';

export class DevicesApiEndpoint extends BaseApiEndpoint<Device, DevicesResource, DevicesResponse, DeviceAssembler> {
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.devicesEndPointPath}`, new DeviceAssembler());
  }

  getByOrganizationId(organizationId: number): Observable<Device[]> {
    return this.http.get<DevicesResource[]>(`${this.endpointUrl}?organizationId=${organizationId}`).pipe(
      map(resources => resources.map(r => this.assembler.toEntityFromResource(r)))
    );
  }

  createDevice(siteId: number, name: string, mode: string): Observable<Device> {
    return this.http.post<DevicesResource>(this.endpointUrl, { siteId, name, mode }).pipe(
      map(resource => this.assembler.toEntityFromResource(resource))
    );
  }

  updateDevice(deviceId: number, siteId: number, name: string, mode: string): Observable<Device> {
    return this.http.put<DevicesResource>(`${this.endpointUrl}/${deviceId}`, { siteId, name, mode }).pipe(
      map(resource => this.assembler.toEntityFromResource(resource))
    );
  }

  deleteDevice(deviceId: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${deviceId}`);
  }
}