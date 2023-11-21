import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { Genre } from 'src/models/genre';
import { MovieService } from 'src/services/movie.service';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SharedModule,FontAwesomeModule],
  
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  genres: Genre[] = [];
  
  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMoviesGenres().subscribe(genresData => {
      this.genres = genresData;
      if (this.genres.length > 0) {
        this.loadMovies(this.genres[14].id);
      }
    });
    this.movieService.getNowPlayingMovies();
  }
  @Input() categories: any[] = [];
  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
 loadMovies(genreId: string): void {
    this.movieService.getMoviesByGenre(genreId, 1).subscribe(
      movies => {
        this.categories = movies.slice(0, 10); 
      },
      error => {
        console.error('Error fetching movies:', error);
      }
    );
  }

}