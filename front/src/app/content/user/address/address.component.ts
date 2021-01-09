import { Component, OnInit } from '@angular/core';
import { AddressService } from './services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  provinceArr: any;
  aumphureArr: any;
  districtArr: any;


  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
    this.getPro()
  }

  getPro() {
    this.addressService.getProvince().subscribe(res => {
      this.provinceArr = res;
    })
  }

  getAumph(event) {
    var obj = {
      province_id: event.target.value
    }
    this.addressService.getAumphure(obj).subscribe(res => {
      this.aumphureArr = res;
    });
  }

  getDistr(event) {
    var obj = {
      aumphure_id: event.target.value
    }
    this.addressService.getDistrict(obj).subscribe(res => {
      this.districtArr = res;
    });
  }



}
