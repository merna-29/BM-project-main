import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { Login1Component } from './login1/login1.component';
import { Moneytransfer1Component } from './moneytransfer1/moneytransfer1.component';
import { Account1Component } from './account1/account1.component';
import { HelppageComponent } from './helppage/helppage.component';
import { HelppComponent } from './helpp/helpp.component';
import { Login3Component } from './login3/login3.component';
import { ErrorrComponent } from './errorr/errorr.component';
import { Moneytransfer2Component } from './moneytransfer2/moneytransfer2.component';
import { Moneytransfer3Component } from './moneytransfer3/moneytransfer3.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { SettingsComponent } from './settings/settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { Account2Component } from './account2/account2.component';
import { Account3Component } from './account3/account3.component';
import { Account4Component } from './account4/account4.component';
import { Login2Component } from './login2/login2.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home2',
        component: Home2Component,
    },
    {
        path: 'moneytransfer1',
        component: Moneytransfer1Component,
    },
    {
        path: 'myaccount1',
        component: Account1Component,
    },
    {
        path: 'help',
        component: HelppComponent,
    },
    {
        path: 'login1',
        component: Login1Component,
    },
    {
        path: '***',
        component: ErrorrComponent,
    },
    {
        path: 'register',
        component: Login3Component,
    },
    {
        path: 'moneytransfer2',
        component: Moneytransfer2Component,
    },
    {
        path: 'moneytransfer3',
        component: Moneytransfer3Component,
    },
    
    {
        path: 'myaccount2',
        component: Account2Component,
    },
    {
        path: 'myaccount3',
        component: Account3Component,
    },
    {
        path: 'logout',
        component: Login2Component,
    },
    
    
    
    
    {
        path: 'home2',
        component: Home2Component,
    }
];
