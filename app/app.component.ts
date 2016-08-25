import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES,NavbarComponent,AboutComponent],
    providers: [HTTP_PROVIDERS] 
})

export class AppComponent { }
