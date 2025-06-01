import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: '',
    component: AppComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
      },
      {
        path: 'datos',
        loadComponent: () => import('./pages/datos/datos.page').then( m => m.DatosPage)
      },
    ]
  },  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  }

  


];
