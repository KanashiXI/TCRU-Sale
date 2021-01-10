import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Emloyeeinterface } from 'src/app/shared/interface/emloyeeinterface';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { Address } from './interfaces/address';
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
  [x: string]: any;


  shippingAddress: Address;

  provinceArr: Province[] = [];
  aumphureArr: Amphure[] = [];
  districtArr: District[] = [];

  provinceValue: number;
  aumphureValue: number;
  districtValue: number;
  dataForm: Emloyeeinterface;

  reactiveForm: FormGroup;
  constructor(
    private customerService: CustomerService,
    private addressService: AddressService,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.getPro();
    this.createForm();
    this.checkCustomer();
  }

  checkCustomer() {
    const requestData = {
      ...Subject,
      customerUsername: localStorage.getItem('customerUsername'),
    }
    this.customerService.getCustomerProfileByEmail(requestData.customerUsername).subscribe(
      res => {
        this.dataForm = res;
        this.reactiveForm.patchValue({
          // name_title: this.dataForm[0].name_title,
          firstname: this.dataForm[0].firstname,
          lastname: this.dataForm[0].lastname,
          telephone: this.dataForm[0].telephone,
          // postal_code: this.dataForm[0].postal_code,
        })
      },
      error => this.errorMessage = <any>error
    )
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      address: ['', [Validators.required]],
      user_id: ['', [Validators.required]],
      amphures_id: ['', [Validators.required]],
      districts_id: ['', [Validators.required]],
      province_id: ['', [Validators.required]],
      postal_code: ['', [Validators.required]],
      geographic_id: ['', [Validators.required]],
      status: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      telephone: ['', [Validators.required]],

    })
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
