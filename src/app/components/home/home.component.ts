import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { SliderComponent } from '../layouts/slider/slider.component';
import { CategoriesComponent } from "../layouts/categories/categories.component";
import { PopularMovieComponent } from '../layouts/popular-movie/popular-movie.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [SharedModule,SearchBarComponent,SliderComponent, CategoriesComponent,PopularMovieComponent]
})
export class HomeComponent {

}
