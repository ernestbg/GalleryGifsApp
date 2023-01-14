import { Component, ElementRef, ViewChild } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private galleryService: GalleryService) {}
  
  search() {
    const value = this.txtSearch.nativeElement.value;

    this.galleryService.searchImages(value);

    this.txtSearch.nativeElement.value = '';
  }
}
