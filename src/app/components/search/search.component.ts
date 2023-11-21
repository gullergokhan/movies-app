import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { MovieListModel } from 'src/models/movie-list';
import { MovieService } from 'src/services/feature.service';
import { NoSearchComponent } from '../no-search/no-search.component';
import { BarSearchComponent } from '../bar-search/bar-search.component';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SharedModule,BarSearchComponent,NoSearchComponent,MovieComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filterText = '';
  movies: MovieListModel[] = [];
  isSearching = false;
  title: 'Search Movie';
  isLoading = false;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onFilterTextChange(filterText: string) {
    this.filterText = filterText;
    this.onSearch();
  }

  onSearch() {
    this.isLoading = true;
    if (this.filterText.trim() === '') {
      this.movies = [];
      this.isSearching = false;
      this.isLoading = false;
      return;
    }

    this.isSearching = true;
    this.isLoading = true;

   this.movieService
    .searchMovies(this.filterText)
    .subscribe((response: any) => {
      this.movies = response.results;
      // Diğer işlemler...
    });
    this.isLoading = false;
  }
}
