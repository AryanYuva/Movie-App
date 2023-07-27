import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { SearchComponent } from './MyComponents/search/search.component';
import { MovieDetailsComponent } from './MyComponents/movie-details/movie-details.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
