import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { Genre, Movie } from 'src/models/movie';
import { ReviewModel, ReviewResult } from 'src/models/review';
import { ImageService } from 'src/services/image.service';
import { MovieService } from 'src/services/feature.service';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './reviews/about/about.component';
import { ReviewComponent } from './reviews/review/review.component';
import { CastComponent } from './reviews/cast/cast.component';
import { ReviewsComponent } from './reviews/reviews.component';

@Component({
  selector: 'app-featured-movie',
  standalone: true,
  imports: [SharedModule,ContentComponent,AboutComponent,ReviewComponent,CastComponent,ReviewsComponent],
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.css']
})
export class FeaturedMovieComponent implements OnInit {
  movie: Movie;
  genres: Genre[];
  reviews: ReviewResult[];
  credits: ReviewModel[];
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const movieId = params['id'];
      this.getMovieDetails(movieId);
      this.getMovieReviews(movieId);
      this.getMovieCredits(movieId);
    });
  }

  getMovieDetails(movieId: string | null) {
    this.isLoading = true;
    if (movieId) {
      this.movieService.getMovieDetails(movieId).subscribe((response) => {
        this.movie = response;
        this.genres = response.genres;
        this.isLoading = false;
      });
    }
  }

  getMovieReviews(movieId: number): void {
    this.isLoading = true;
    this.movieService.getMovieReviews(movieId).subscribe((response) => {
      this.reviews = response.results;
      this.isLoading = false;
    });
  }

  getMovieCredits(movieId: number): void {
    this.isLoading = true;
    this.movieService.getMovieCredits(movieId).subscribe((response) => {
      this.credits = response.cast;
    });
    this.isLoading = false;
  }

  getImageUrl(posterPath: string) {
    this.imageService.getImageUrl(posterPath);
  }
}
