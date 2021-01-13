import { Component, OnInit } from '@angular/core';
import { TaxService } from './../services/tax.service';
import { Tax } from './../interfaces/tax';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { Emloyeeinterface } from 'src/app/shared/interface/emloyeeinterface';


@Component({
  selector: 'app-inserttax',
  templateUrl: './inserttax.component.html',
  styleUrls: ['./inserttax.component.css']
})
export class InserttaxComponent implements OnInit {

  dataForm: Emloyeeinterface;
  reactiveForm: FormGroup;
  errorMessage: String;

  constructor(
    private taxService: TaxService,
    private fb: FormBuilder,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.getTaxForm(),
      this.createForm()
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      address: ['', [Validators.required]],
      user_id: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      vat_identification_number: ['', [Validators.required]],
      district: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      postal_code: ['', [Validators.required]],

    })
  }

  getTaxForm() {
    const requestData = {
      ...Subject,
      customerUsername: localStorage.getItem('customerUsername'),
    }
    this.customerService.getCustomerProfileByEmail(requestData.customerUsername).subscribe(
      res => {
        this.dataForm = res;
        this.reactiveForm.patchValue({
          firstname: this.dataForm[0].firstname,
          lastname: this.dataForm[0].lastname,
          // telephone: this.dataForm[0].telephone,
          // user_id: this.dataForm[0].id,
        })
      },
      error => this.errorMessage = <any>error
    )
  }

  onClickSubmit() {

  }

  get firstname() {
    return this.reactiveForm.get('firstname')
  }
  get lastname() {
    return this.reactiveForm.get('lastname')
  }
  get telephone() {
    return this.reactiveForm.get('telephone')
  }
  get address() {
    return this.reactiveForm.get('address')
  }
  get postal_code() {
    return this.reactiveForm.get('postal_code')
  }
  get vat_identification_number() {
    return this.reactiveForm.get('vat_identification_number')
  }
  get company_name() {
    return this.reactiveForm.get('company_name')
  }




}
