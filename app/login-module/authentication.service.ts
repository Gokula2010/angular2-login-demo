import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { User } from './user';

@Injectable()
export class AuthenticationService {
    Users: User[] ;
    token: string;

    constructor(private _router: Router) {
        this.token = localStorage.getItem('token');

        this.Users = [
            new User('gokul', 'gokul'), //{ username: 'gokul', password: 'gokul'},
            new User('test', 'test')
        ];

     }

     login(user) {

        var authenticatedUser = this.Users.find(u=> u.username === user.username);

        if(authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem('token', JSON.stringify(authenticatedUser));
            this._router.navigate(['home']);
            return true;
        }
        else {
            return false;
        }
     }

     logout() {
         localStorage.removeItem('token');
         this._router.navigate(['login']);
     }

     checkCredentials() {
         if(localStorage.getItem('token') === null)
            this._router.navigate(['login']);
     }
}