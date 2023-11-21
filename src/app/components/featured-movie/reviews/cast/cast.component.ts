import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { ReviewModel } from 'src/models/review';
import { ImageService } from 'src/services/image.service';

@Component({
  selector: 'app-cast',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  @Input() credits: ReviewModel[];
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}
  getImageUrl(posterPath: string | undefined): string {
    if (!posterPath) {
      return ''; // veya varsayılan bir resim URL'i döndürebilirsiniz
    }
    return this.imageService.getImageUrl(posterPath);
  }
  handleImageError(event: any) {
    event.target.src = '/assets/images/default_avatar.png';
  }
}
