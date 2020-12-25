import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { Emloyeeinterface } from 'src/app/shared/interface/emloyeeinterface';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  reactiveForm: FormGroup;
  submitted = false;

  emp: Emloyeeinterface[];
  constructor(private customerService: CustomerService, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe()
    this.createForm();

  }

  createForm() {
    this.reactiveForm = this.fb.group({
      username: ['',]
    })
  }

  onClickSearch(){
      
      const customer = this.reactiveForm.getRawValue();
      console.log(customer)
      this.customerService.getCustomerByUsername(customer).subscribe(
        response => {
          this.emp = response;
        }
      );
      
    
  }

  get username() {
    return this.reactiveForm.get('username')
  }

}
