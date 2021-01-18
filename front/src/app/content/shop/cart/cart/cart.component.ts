import { Component, OnInit } from '@angular/core';
import { MessengerService } from './../../services/messenger.service';
import { Subject } from 'rxjs';
import { Product } from '../../productview/interfaces/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem = []
  cartTotal = 0
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItem) {
      if (this.cartItem[i].product_id === product.product_id) {
        this.cartItem[i].quantity++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItem.push({
        product_id: product.product_id,
        product_name: product.product_name,
        quantity: 1,
        product_price: product.retail_price
      })
    }

    // for(let i in this.cartItem){
    //   if(this.cartItem[i].product_id === product.product_id){
    //     this.cartItem[i].quantity++
    //   }else{
    //      this.cartItem.push({
    //         product_id: product.product_id,
    //         product_name: product.product_name,
    //         quantity: 1,
    //         product_price: product.retail_price
    //       })
    //      }

    // }

    this.cartTotal = 0;
    this.cartItem.forEach(item => {
      this.cartTotal += (item.quantity * item.product_price)
    })


  }

}
