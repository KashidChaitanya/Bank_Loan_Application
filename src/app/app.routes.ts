import { Routes } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ApplicatioListComponent } from './pages/applicatio-list/applicatio-list.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'newApplication',
        pathMatch: 'full'
    },

    {
        path:'newApplication',
        component: LoanApplicationComponent
    },

    {
        path:'applicationList',
        component: ApplicatioListComponent
    }
];
