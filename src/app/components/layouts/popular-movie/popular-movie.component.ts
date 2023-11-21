import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-popular-movie',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit{
  
  constructor(public movieService: MovieService) {}

  ngOnInit(): void {     
    this.movieService.getPopularMovies();
  }
}
