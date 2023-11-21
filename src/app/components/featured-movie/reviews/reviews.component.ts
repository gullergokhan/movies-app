import { Component, Input, OnInit } from '@angular/core';
import { ReviewModel, ReviewResult } from 'src/models/review';
import { Movie } from 'src/models/movie';
import { Tab } from 'src/models/tab';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { AboutComponent } from './about/about.component';
import { CastComponent } from './cast/cast.component';
import { ReviewComponent } from './review/review.component';
import { TabComponent } from '../../tab-list/tab-list.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [SharedModule,AboutComponent,CastComponent,ReviewComponent,TabComponent],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() selectedTab: string = 'about-movie';

  @Input() reviews: ReviewResult[];
  @Input() aboutMovie: Movie;
  @Input() credits: ReviewModel[];

  movieDetailTabs: Tab[] = [
    { id: 'about-movie', label: 'About Movie' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'cast', label: 'Cast' },
  ];

  constructor() {}

  ngOnInit(): void {}

  tabChange(tabId: string) {
    this.selectedTab = tabId;
  }
}
