import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login-module/login.component';
import { HomeComponent } from './home-module/home.component';


export const routes: RouterConfig = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '/login' }
]

export const appRouterProviders = [
    provideRouter(routes)
]