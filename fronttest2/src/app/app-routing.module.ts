import { ProductInfoComponent } from './content/productInfo/productInfo.component';
import { PleaseCheckMailComponent } from './content/pleaseCheckMail/pleaseCheckMail.component';
import { ResetPasswordComponent } from './content/resetPassword/resetPassword.component';
import { ShopComponent } from './content/shop/shop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { RegisterComponent } from './content/register/register.component';
import { ProfileComponent } from './content/profile/profile.component';
import { SigninComponent } from './content/signin/signin.component';
import { BeforeLoginService } from './shared/service/before-login.service';
import { AfterLoginService } from './shared/service/after-login.service';
import { ProductviewComponent } from './content/productview/productview.component';


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

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
