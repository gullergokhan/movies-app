import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/services/feature.service';
import {  Router } from '@angular/router';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  datas: any = [];
  imageApi = "https://image.tmdb.org/t/p/w1280";
  queryParam: string = '';

  constructor(
    private service: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const currentRoute = this.router.url;
    const splitRoutes = currentRoute.split('/search/featured-movie/');
    if (splitRoutes.length > 1) {
      this.queryParam = splitRoutes[1];
      this.SearchMovies(this.queryParam);
      console.log(this.queryParam);
    }
  }

  SearchMovies(query: string){
    this.service.searchMovies(query)
      .subscribe(res => {
        this.datas = res;
        console.log(this.datas);
      });
  }
}