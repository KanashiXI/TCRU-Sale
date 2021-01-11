import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { Emloyeeinterface } from 'src/app/shared/interface/emloyeeinterface';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { Address } from '../address/interfaces/address';
import { AddressService } from '../address/services/address.service';

@Component({
  selector: 'app-showaddress',
  templateUrl: './showaddress.component.html',
  styleUrls: ['./showaddress.component.css']
})
export class ShowaddressComponent implements OnInit {
  // @Output() newItemEvent = new EventEmitter<string>();
  dataForm: Emloyeeinterface;
  errorMessage: String;
  dataSource: Address[];
  shippingAddressList: Address[];
  // totalRecords: number;
  // loading: boolean;

  constructor(
    private addressService: AddressService,
    private customerService: CustomerService,

  ) { }

  ngOnInit(): void {

    const requestData = {
      ...Subject,
      customerUsername: localStorage.getItem('customerUsername'),
    }
    this.customerService.getCustomerProfileByEmail(requestData.customerUsername).subscribe(
      res => {
        this.dataForm = res;
        const user_id = res[0].id;
        const address_id = res[0].address_id;
        this.getUserAddress(user_id);
      },
      error => this.errorMessage = <any>error
    )
    //// ////////////////////////////////ต้องการ id user <--- ได้แล้ว

    // this.loading = true;

  }

  getUserAddress(user_id) {
    this.addressService.getShippingAddress(user_id).subscribe(data => {
      this.dataSource = data;

      // this.totalRecords = data.length;
    });
  }
  onClickDelete(data) {
    this.addressService.deleteAddress(data).subscribe();
  }

  onClickSubmit(data) {
    this.addressService.nextMessage(data);
    localStorage.setItem("address_id", data);
  }

  // loadCustomers(event: LazyLoadEvent) {
  //   this.loading = true;
  //   setTimeout(() => {
  //     if (this.shippingAddressList) {
  //       this.shippingAddressList = this.dataSource.slice(event.first, (event.first + event.rows));
  //       this.loading = false;
  //     }
  //   }, 1000);
  //   console.log(this.shippingAddressList[0].address)
  // }


}
