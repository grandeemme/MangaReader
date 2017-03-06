import { Injectable } from '@angular/core';
import {MangaService} from './manga-service';
import { Http, RequestOptions, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {MangaList, MangaInfo, Chapter} from '../models/manga';
import {environment} from '../../environments/environment';

@Injectable()
export class MangaEdenService implements MangaService {

  data: MangaList;

  constructor(private http: Http) {
    console.log('Hello MangaService Provider');
  }

  async  loadMangaList(lang = '1', page = 0, size = 30): Promise<MangaList> {
    if (this.data) {
      // already loaded data
      return this.data;
    }
    let url = environment.serviceUrl + 'list/' + lang + '/?p=' + page + '&l=' + size;

    // TODO: Add error handling
    this.data = await this.http
      .get(url)
      .toPromise()
      .then(response => response.json());

    return this.data;
  }


  loadMangaInfo(id: string): Promise<MangaInfo> {
    return this.http.get(environment.serviceUrl + 'manga/' + id + '/')
      .toPromise()
      .then(res => res.json());
  }

  loadChapter(id: string): Promise<Chapter> {
    return this.http.get(environment.serviceUrl + 'chapter/' + id + '/')
      .toPromise()
      .then(res => res.json());
  }

}
