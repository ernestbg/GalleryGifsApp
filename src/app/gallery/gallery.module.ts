import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GalleryPageComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryPageComponent
  ]
})
export class GalleryModule { }
