import { Component, OnInit, Input} from '@angular/core';

import { NgForm } from '@angular/forms';
import { User } from './user';
import { AuthenticationService } from './authentication.service';
@Component({
    moduleId: module.id,
    selector: 'my-login-form',
    templateUrl: 'login.component.html',
    providers: [AuthenticationService]
})

export class LoginComponent implements OnInit {
    Users: User[] ;
    model: User;
    
    public errorMsg = '';

    constructor(private _authService :AuthenticationService) {
        this.model = new User('', '');
     }

    ngOnInit() { }

    onLogin() {
        if(!this._authService.login(this.model)) {
            //console.log('Failed to login');
            this.errorMsg = 'Failed to login';
        }
    }

}

