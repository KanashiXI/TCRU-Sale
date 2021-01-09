import { CartComponent } from './content/dealing/cart/cart.component';
import { ProductDetailComponent } from './content/shop/productDetail/productDetail.component';
import { ProductInfoComponent } from './content/shop/productInfo/productInfo.component';
import { PleaseCheckMailComponent } from './content/auth/pleaseCheckMail/pleaseCheckMail.component';
import { ResetPasswordComponent } from './content/auth/resetPassword/resetPassword.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './content/auth/login/login.component';
import { RegisterComponent } from './content/auth/register/register.component';
import { ProfileComponent } from './content/user/profile/profile.component';
import { SigninComponent } from './content/auth/signin/signin.component';
import { BeforeLoginService } from './shared/service/before-login.service';
import { AfterLoginService } from './shared/service/after-login.service';
import { ProductviewComponent } from './content/shop/productview/productview.component';
import { TaxinvoiceComponent } from './content/user/taxinvoice/taxinvoice.component';
import { AddressComponent } from './content/user/address/address.component';



const routes: Routes = [
  {
    path: '',
    component: ProductviewComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,

  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  // {
  //   path: 'signin',
  //   component: SigninComponent
  // },
  {
    path: 'login/resetpassword',
    component: ResetPasswordComponent,
  },
  {
    path: 'login/resetpassword/checkmail',
    component: PleaseCheckMailComponent,
  },
  {
    path: 'productinfo',
    component: ProductInfoComponent,
  },
  // {
  //   path: 'product',
  //   component: ProductviewComponent,
  // },
  {
    path: 'productview/productdetail',
    component: ProductDetailComponent,
  },
  {
    path: 'tax',
    component: TaxinvoiceComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'address',
    component: AddressComponent,
    canActivate: [AfterLoginService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
