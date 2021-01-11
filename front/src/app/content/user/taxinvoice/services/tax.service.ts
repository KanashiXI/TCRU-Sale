import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from 'src/app/shared/constants/ApiConstants';
import { Tax } from '../interfaces/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor(private http: HttpClient) { }

  getProvince(data) {
    return this.http.get<Tax[]>(`${ApiConstants.baseURl}${ApiConstants.gettaxURL}/${data}`);
  }

}
