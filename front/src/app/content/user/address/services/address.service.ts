import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from 'src/app/shared/constants/ApiConstants';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getProvince() {
    return this.http.get(`${ApiConstants.baseURl}${ApiConstants.provinceURl}`);
  }

  getAumphuret(data) {
    return this.http.post(`${ApiConstants.baseURl}${ApiConstants.aumphureURl}`, data);
  }

  getDistrict(data) {
    return this.http.post(`${ApiConstants.baseURl}${ApiConstants.districtURl}`, data);
  }





}
