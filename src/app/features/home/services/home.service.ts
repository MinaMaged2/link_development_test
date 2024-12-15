import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Banner } from '../../../core/models/banner';
import { EndPoints } from '../../../core/classes/endPoints';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private http = inject(HttpClient);

  constructor() {}

  getBanners(){
    return this.http.get<{slides: Banner[]}>(
      `${EndPoints.Slides}`,
    )
  }
}
