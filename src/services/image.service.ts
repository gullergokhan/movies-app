import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}
  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500/${path}`;
  }
}
