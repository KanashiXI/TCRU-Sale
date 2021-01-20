import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { Product } from '../models/product';
import { MessengerService } from '../services/messenger.service';


// import { Product } from './../productview/interfaces/product';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public loggedIn: boolean;
  // @Input() productItem: Product
  items: MenuItem[];
  // productInfo: ProductInfo;
  productInfo: Product;
  counter: number = 0;
  reactiveForm: FormGroup;
  productName: string
  productPrice: string
  productCapacity: string
  private cart: Product;

  productList: Product[];
  constructor(
    private Auth: AuthService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private msg: MessengerService,
    private fb: FormBuilder,

  ) {
    this.cart = new Product()
  }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.items = [
      { label: 'สินค้าทั้งหมด', url: '/' },
      { label: 'สินค้า...' },
    ];
    this.createForm();
    this.getProduct();

  }
  createForm() {
    this.reactiveForm = this.fb.group({
      product_name: [''],
      retail_price: [''],

    })

  }

  getProduct(): void {
    const productId = this.route.snapshot.paramMap.get('product_id');
    this.productService.getDetail(productId).subscribe(
      prod => {
        this.productInfo = prod;
        this.reactiveForm.patchValue({
          product_name: this.productInfo[0].product_name,
          retail_price: this.productInfo[0].retail_price,
        })
        this.productName = this.reactiveForm.get('product_name').value
        this.productPrice = this.reactiveForm.get('retail_price').value
      }
    )
  }

  handleAddToCart() {
    console.log(this.productInfo)
    this.msg.sendMsg(this.productInfo)
  }

  getProductList() {
    this.msg.getMsg().subscribe((prodList: Product[]) => {
      this.productList = prodList;
    })
    // console.log(this.items)
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
