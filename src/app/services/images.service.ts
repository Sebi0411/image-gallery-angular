import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../image.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private endpoint = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.endpoint);
  }
}
