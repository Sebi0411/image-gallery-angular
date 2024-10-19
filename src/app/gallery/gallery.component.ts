import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  imagesData: any[] = [];
  authors: string[] = [];
  paginatedImages: any[] = [];
  currentPage: number = 1;
  imagesPerPage: number = 6;
  totalPages: number = 0;
  selectedAuthor: string = 'all';

  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.imagesService.getImages().subscribe(data => {
      this.imagesData = data;
      this.authors = [...new Set(data.map(img => img.author))];
      this.totalPages = Math.ceil(data.length / this.imagesPerPage);
      this.updatePaginatedImages();
    });
  }

  updatePaginatedImages() {
    const filteredImages = this.selectedAuthor === 'all' ? this.imagesData : this.imagesData.filter(img => img.author === this.selectedAuthor);
    const startIndex = (this.currentPage - 1) * this.imagesPerPage;
    this.paginatedImages = filteredImages.slice(startIndex, startIndex + this.imagesPerPage);
    this.totalPages = Math.ceil(filteredImages.length / this.imagesPerPage);
  }

  onAuthorChange(event: any) {
    this.selectedAuthor = event.target.value;
    this.currentPage = 1;
    this.updatePaginatedImages();
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.updatePaginatedImages();
  }
}
