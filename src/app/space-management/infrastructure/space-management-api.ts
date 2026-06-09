import {Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SpaceManagementApi extends BaseApi{

  constructor(http: HttpClient) {
    super();
  }
}
