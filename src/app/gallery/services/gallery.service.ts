import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchImagesResponse, Image } from '../interfaces/images.interface';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private apiKey: string = 'mBRsu8YJCeMOEZMqLpFmO2sK7YxmWqLv';
  private endPoint: string = 'https://api.giphy.com/v1/gifs';
  private _record: string[] = [];
  public results: Image[] = [];
  public _recordedImages: Image[] = [];

  constructor(private http: HttpClient) {
    if (localStorage.getItem('record')) {
      this._record = JSON.parse(localStorage.getItem('record')!) || [];
    }

    if (localStorage.getItem('results')) {
      this.results = JSON.parse(localStorage.getItem('results')!) || [];
    }
  }

  get record() {
    return [...this._record];
  }

  searchImages(query: string = '') {
    if (query.trim().length === 0) {
      return;
    }
    query = query.trim().toLocaleLowerCase();

    if (!this._record.includes(query)) {
      this._record.unshift(query);
      this._record = this._record.splice(0, 10);

      localStorage.setItem('record', JSON.stringify(this._record));
    }

    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('q', query)
      .set('limit', '10');

    this.http
      .get<SearchImagesResponse>(`${this.endPoint}/search`, { params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
