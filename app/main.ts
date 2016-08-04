import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { appRouterProviders } from './app.routes';
import { AppComponent } from './app.component';
//import { AuthenticationService } from './login-module/authentication.service';

bootstrap(AppComponent, [appRouterProviders])
    .catch(err=> console.error(err));