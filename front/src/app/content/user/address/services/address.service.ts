import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from 'src/app/shared/constants/ApiConstants';
import { Amphure } from '../interfaces/amphure';
import { District } from '../interfaces/district';
import { Province } from '../interfaces/province';
import { Address } from './../interfaces/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getProvince() {
    return this.http.get<Province[]>(`${ApiConstants.baseURl}${ApiConstants.provinceURl}`);
  }

  getAumphure(data) {
    return this.http.post<Amphure[]>(`${ApiConstants.baseURl}${ApiConstants.aumphureURl}`, data);
  }

  getDistrict(data) {
    return this.http.post<District[]>(`${ApiConstants.baseURl}${ApiConstants.districtURl}`, data);
  }

  insertAddress(data) {
    return this.http.post<Address[]>(`${ApiConstants.baseURl}${ApiConstants.daddressURl}`, data);
  }


}
