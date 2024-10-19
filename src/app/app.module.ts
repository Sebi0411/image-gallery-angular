import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ImagesService } from './services/images.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageCardComponent,
    PaginationComponent,
  ],
  imports: [BrowserModule],
  providers: [ImagesService, provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
