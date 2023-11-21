import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { ReviewResult } from 'src/models/review';
import { ImageService } from 'src/services/image.service';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: ReviewResult[];
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}
  getImageUrl(posterPath: string | undefined): string {
    if (!posterPath) {
      return ''; 
    }
    return this.imageService.getImageUrl(posterPath);
  }
  handleImageError(event: any) {
    event.target.src = '/assets/images/default_avatar.png';
  }
}
