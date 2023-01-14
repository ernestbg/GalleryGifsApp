import { Component } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent {
  get results() {
    return this.galleryService.results;
  }

  constructor(private galleryService: GalleryService) {}
}
