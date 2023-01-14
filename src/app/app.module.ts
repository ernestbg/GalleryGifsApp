import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GalleryModule } from './gallery/gallery.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,SharedModule, GalleryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
