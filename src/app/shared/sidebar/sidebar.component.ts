import { Component } from '@angular/core';
import { GalleryService } from '../../gallery/services/gallery.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
})
export class SidebarComponent {

  constructor(private galleryService: GalleryService ){}

  get record(){
    return this.galleryService.record;

  }

  search(word:string){
    this.galleryService.searchImages(word);
  }
  

}
