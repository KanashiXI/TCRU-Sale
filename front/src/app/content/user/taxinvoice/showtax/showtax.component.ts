import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Emloyeeinterface } from 'src/app/shared/interface/emloyeeinterface';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { Tax } from '../interfaces/tax';
import { TaxService } from '../services/tax.service';

@Component({
  selector: 'app-showtax',
  templateUrl: './showtax.component.html',
  styleUrls: ['./showtax.component.css']
})
export class ShowtaxComponent implements OnInit {
  dataForm: Emloyeeinterface;
  dataSource: Tax[];
  errorMessage: String;
  constructor(
    private taxService: TaxService,
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
        this.getUserTax(user_id);
      },
      error => this.errorMessage = <any>error
    )
  }

  getUserTax(user_id) {
    this.taxService.getTax(user_id).subscribe(data => {
      this.dataSource = data;
    });
  }

  onClickDelete(data) {
    this.taxService.deleteTax(data).subscribe();
  }

  onClickEdit(data) {
    localStorage.setItem("local_tax_id", data);
  }





}
