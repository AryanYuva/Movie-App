import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Title,Meta } from '@angular/platform-browser';
import { MovieAppApiService } from 'src/app/movie-app-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:MovieAppApiService,private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies - Movies App');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

  ngOnInit(): void {
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm()
  {
      console.log(this.searchForm.value,'searchform#');
      this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.results;
      });
  }

}
