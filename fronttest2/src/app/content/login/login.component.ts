import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/shared/service/customer.service';
import { compareValidator } from 'src/app/shared/service/compare-validator.directive';
// import { resolve } from 'dns';
import { uniqueEmailValidator } from './../../shared/service/unique-email-validator.directive';
import { uniqueUsernameValidator } from 'src/app/shared/service/unique-username-validator.directive';
import { JarwisService } from 'src/app/shared/service/jarwis.service';
import { TokenService } from 'src/app/shared/service/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
// import { MessageService } from 'primeng/api/primeng-api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };
  public error = null;


  // private duplicateEmailDbounce;
  reactiveForm: FormGroup;
  submitted = false;
  isUserNull = false;
  constructor(
    private customerService: CustomerService,
    private http: HttpClient,
    private fb: FormBuilder,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    // private messageService: MessageService,
  ) {

  }
  ngOnInit() {
    this.customerService.getCustomer().subscribe()

    this.createForm();
  }

  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error;
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      username: ['', null, uniqueUsernameValidator(this.customerService), [Validators.required]],
      password: ['', [Validators.required], Validators.maxLength(16), Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')],
      role_id: [2, [Validators.required]],
    })
  }


  onClickRegis() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    } else {
      const customer = this.reactiveForm.getRawValue();
      this.customerService.postCustomer(customer).subscribe(
        // (response: Response) => {

        // },
        // error => {
        //   this.messageService.clear();
        //   this.messageService.add({
        //     key: "errorMessage",
        //     severity: "error",
        //     summary: "ผิดพลาด",
        //     detail: error.error.errorMessage
        //   });
        // }
      );

    }
  }

  get username() {
    return this.reactiveForm.get('username')
  }
  get password() {
    return this.reactiveForm.get('password')
  }

}
