import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Productinterface } from 'src/app/shared/interface/productinterface';
import { ProductService } from 'src/app/shared/service/product.service';

interface sortBy {
  sort: string,
  code: string
}
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
@Injectable()
export class ProductviewComponent implements OnInit {
  // products: Product[];

  activeIndex: number = 0;
  sortField: string;
  sortOrder: number;

  productList: Productinterface[] = [];

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.queryDepartment();
  }


  // productFormGroup = new FormGroup({
  //   product_name: new FormControl(),
  //   product_price: new FormControl(),
  //   retail_price: new FormControl(),
  // });

  queryDepartment() {
    // const condition = this.productFormGroup.getRawValue();
    this.productService.getProducts().subscribe(
      response => {
        this.productList = response;
      }
    );
  }

}
