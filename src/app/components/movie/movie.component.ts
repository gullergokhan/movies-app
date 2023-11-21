import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/services/image.service';
import { MovieListModel } from 'src/models/movie-list';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieListModel;
  @Input() filterText: string;
  @Input() width: number = 137;
  @Input() height: number = 206;
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  getImageUrl(posterPath: string) {
    return this.imageService.getImageUrl(posterPath);
  }
}
