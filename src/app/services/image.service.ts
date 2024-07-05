import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private images: string[] = [
    'https://via.placeholder.com/150/FF0000',
    'https://via.placeholder.com/150/00FF00',
    'https://via.placeholder.com/150/0000FF',
    'https://via.placeholder.com/150/FFFF00',
    'https://via.placeholder.com/150/FF00FF',
    'https://via.placeholder.com/150/00FFFF',
  ];

  getRandomImage(): string {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }
}
