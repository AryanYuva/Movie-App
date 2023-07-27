import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { MovieAppApiService } from './movie-app-api.service';
import { SearchComponent } from './MyComponents/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './MyComponents/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieAppApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
