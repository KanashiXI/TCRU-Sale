import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css']
})
export class ProductDetailComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'สินค้าทั้งหมด', url:'/'},
      {label:'Sports'},
   
    ];
  }

}
