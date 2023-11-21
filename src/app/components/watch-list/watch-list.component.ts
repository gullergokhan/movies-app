import { Component, OnInit } from '@angular/core';
import { WatchListService } from 'src/services/watch-list.service';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MovieService } from 'src/services/feature.service';
import { ImageService } from 'src/services/image.service';
import { Movie } from 'src/models/movie';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent  implements OnInit {
  watchList: Movie[] = [];
  title: 'Watch List';

  constructor(
    private movieService: MovieService,
    private watchListService: WatchListService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.getWatchListMovies();
  }

  getWatchListMovies(): void {
    const movieIds = this.watchListService.getWatchList();
    const requests = movieIds.map((movie) =>
      this.movieService.getMovieDetails(String(movie.id))
    );

    forkJoin(requests).subscribe((responses: Movie[]) => {
      this.watchList = responses;
    });
  }

  getImageUrl(posterPath: string): string {
    return this.imageService.getImageUrl(posterPath);
  }
  private saveWatchList(): void {
    localStorage.setItem('watchList', JSON.stringify(this.watchList));
  }
  removeFromWatchList(movieId: number): void {
  const index = this.watchList.findIndex((movie) => movie.id === movieId);
  if (index !== -1) {
    this.watchList.splice(index, 1);
    this.saveWatchList();
  }
}
}
