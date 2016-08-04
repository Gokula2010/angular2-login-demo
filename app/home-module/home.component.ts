import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login-module/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'my-home',
    templateUrl: 'home.component.html',
    providers: [AuthenticationService]
})
export class HomeComponent implements OnInit {
    constructor(private _authService: AuthenticationService) {

     }

    ngOnInit() { 
        this._authService.checkCredentials();
    }


    onLogout() {
        this._authService.logout();
    }

    CanActivate() {
        console.log('Can Activated');   
    }
    
}