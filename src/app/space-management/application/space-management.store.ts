import {Injectable} from '@angular/core';
import {SpaceManagementApi} from '../infrastructure/space-management-api';

@Injectable({providedIn: 'root'})
export class SpaceManagementStore {

  constructor(private spaceManagementApi: SpaceManagementApi) {
  }
}
