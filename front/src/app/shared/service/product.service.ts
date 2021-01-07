import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productinterface } from '../interface/productinterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    let httpParms = new HttpParams();

    const observable = this.http.get<Productinterface[]>('http://127.0.0.1:8000/api/product/', { params: httpParms })
    return observable;

  }




}
