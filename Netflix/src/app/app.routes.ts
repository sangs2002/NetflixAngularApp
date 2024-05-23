import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',loadComponent:()=>import('./Pages/login/login.component').then(a=>a.LoginComponent)
    },
    {
        path: 'browse',loadComponent:()=>import('./Pages/browse/browse.component').then(a=>a.BrowseComponent)
    }
];
