import { Component, OnInit } from '@angular/core';
import { Amphure } from './interfaces/amphure';
import { District } from './interfaces/district';
import { Province } from './interfaces/province';
import { AddressService } from './services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  provinceArr: Province[] = [];
  aumphureArr: Amphure[] = [];
  districtArr: District[] = [];

  provinceValue: number;
  aumphureValue: number;
  districtValue: number;

  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
    this.getPro()
  }

  getPro() {
    this.addressService.getProvince().subscribe(
      res => {
        this.provinceArr = res;
      })
  }

  getAumph(event) {
    var obj = {
      id: event.target.value
    }
    this.provinceValue = obj.id;
    this.addressService.getAumphure(obj).subscribe(res => {
      this.aumphureArr = res;
    });
  }

  getDistr(event) {
    var obj = {
      id: event.target.value
    }
    this.aumphureValue = obj.id;
    this.addressService.getDistrict(obj).subscribe(res => {
      this.districtArr = res;
    });
  }
  getLast(event) {
    var obj = {
      id: event.target.value
    }
    this.districtValue = obj.id;
  }

  onClickSubmit() {

  }



}
