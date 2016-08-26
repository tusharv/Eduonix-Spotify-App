import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.route';
import { AppComponent }  from './app.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule],
  providers: [ appRoutingProviders ],
  declarations: [ AppComponent, AboutComponent, SearchComponent, ArtistComponent,AlbumComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
