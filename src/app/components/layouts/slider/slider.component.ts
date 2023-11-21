import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {     
    this.movieService.getTopTenMovies();
  }
}
