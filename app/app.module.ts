import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.route';
import { AppComponent }  from './app.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  imports: [ BrowserModule, routing ],
  providers: [ appRoutingProviders ],
  declarations: [ AppComponent, AboutComponent, SearchComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
