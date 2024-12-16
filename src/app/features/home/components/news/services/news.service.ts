import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EndPoints } from '../../../../../core/classes/endPoints';
import { Banner } from '../../../../../core/models/banner';
import { Category } from '../../../../../core/models/category';
import { News } from '../../../../../core/models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private http = inject(HttpClient);

  constructor() {}

  getCategories() {
    return this.http.get<{ newsCategory: Category[] }>(
      `${EndPoints.Categories}`
    );
  }

  getNews(params:any) {
    return this.http.get<{ News: News[] }>(
      `${EndPoints.News}`,
      {
        params
      }
    );
  }
}
