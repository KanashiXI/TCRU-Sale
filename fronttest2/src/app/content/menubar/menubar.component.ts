import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { TokenService } from 'src/app/shared/service/token.service';


@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
    public loggedIn: boolean;
    //   megaItems: MegaMenuItem[];
    items: MenuItem[];

    constructor(
        private Auth: AuthService,
        private router: Router,
        private Token: TokenService
    ) { }

    logout(event: MouseEvent) {
        event.preventDefault();
        this.Token.remove();
        this.Auth.changeAuthStatus(false);
        this.router.navigateByUrl('/login');
    }

    ngOnInit(): void {
        this.Auth.authStatus.subscribe(value => this.loggedIn = value);
        this.items = [
        //     {
        //         label: 'หน้าหลัก',
        //         icon: 'pi pi-fw pi-home',
        //         // /login
        //         routerLink: ['/']

        //     },
        //     {
        //         label: 'ผลิตภัณฑ์',
        //         items: [
        //             {
        //                 label: 'เชื้อราบิวเวอร์เรีย',
        //                 icon: 'pi pi-fw pi-tag',
        //                 // items: [
        //                 //     {label: 'Project'},
        //                 //     {label: 'Other'},
        //                 // ]
        //             },
        //             {
        //                 label: 'เชื้อราเมธาไรเซียม',
        //                 icon: 'pi pi-fw pi-tag',
        //             },
        //             {
        //                 label: 'เชื้อราไตรโคเดอร์มา',
        //                 icon: 'pi pi-fw pi-tag',
        //             }
        //         ]
        //     },
        //     {
        //         label: 'Edit',
        //         icon: 'pi pi-fw pi-pencil',
        //         items: [
        //             { label: 'Delete', icon: 'pi pi-fw pi-trash' },
        //             { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        //         ]
        //     },
        //     {
        //         label: 'profile',
        //         icon: 'pi pi-fw pi-user',
        //         items: [
        //             { label: 'จัดการบัญชี', icon: 'pi pi-fw pi-id-card', routerLink: ['/profile'], },
        //             { label: 'การชื้อสินค้า', icon: 'pi pi-fw pi-shopping-cart' },
        //             { label: 'ออกจากระบบ', icon: 'pi pi-fw pi-sign-out' },
        //         ]
        //     },
            // {
            //     label: 'เข้าสู่ระบบ',
            //     icon: 'pi pi-fw pi-sign-in',
            //     // /login
            //     routerLink: ['/login'],
            //     items: [
            //         if(!loggedIn:true):false
                
            //     ]
                    
            // },
        //     {
        //         label: 'สมัครสมาชิก',
        //         icon: 'pi pi-fw pi-sign-in',
        //         // /login
        //         routerLink: ['/register']

        //     },
        ];
    }

}
