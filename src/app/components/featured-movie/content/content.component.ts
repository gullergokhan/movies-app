import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { Genre, Movie } from 'src/models/movie';
import { MovieService } from 'src/services/feature.service';
import { ImageService } from 'src/services/image.service';
import { WatchListService } from 'src/services/watch-list.service'


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SharedModule,FontAwesomeModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() movie: Movie;
  @Input() genres: Genre[];
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private imageService: ImageService,
    private WatchListService: WatchListService 
  ) {}
  ngOnInit() {}

  getImageUrl(posterPath: string): string {
    return this.imageService.getImageUrl(posterPath);
  }
  saveToLocalStorage(movieId: number): void {
    this.movieService
      .getMovieDetails(movieId.toString())
      .subscribe((response: Movie) => {
        this. WatchListService.addToWatchList(response);
      });
    alert('Film favorilere eklendi!');
  }


}
