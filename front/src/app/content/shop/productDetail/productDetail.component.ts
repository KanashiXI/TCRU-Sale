import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProductService } from 'src/app/shared/service/product.service';
import { MessengerService } from '../services/messenger.service';


import { Product } from './../productview/interfaces/product';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // @Input() productItem: Product
  items: MenuItem[];
  // productInfo: ProductInfo;
  productInfo: Product;
  counter: number = 0;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private msg: MessengerService
  ) { }

  ngOnInit() {
    this.items = [
      { label: 'สินค้าทั้งหมด', url: '/' },
      { label: 'สินค้า...' },
    ];
    this.getProduct();
  }

  getProduct(): void {
    const productId = this.route.snapshot.paramMap.get('product_id');
    this.productService.getDetail(productId).subscribe(
      prod => {
        this.productInfo = prod;
        // เก็บคำอธิบายสินค้าสินค้า
      }
    )
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productInfo)
  }


  decrese() {
    console.log('hey decrese');
    if (this.counter - 1 > 0) {
      this.counter--;
    }

  }

  increse() {
    if (this.counter + 1 < 100) {
      this.counter++;
    }

  }



}
