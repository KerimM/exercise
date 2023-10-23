import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppList } from '../models/appList.model';

@Injectable({
  providedIn: 'root'
})
export class AppListService {

  private apiEndpoint = 'https://itunes.apple.com/us/rss/toppaidapplications/limit=200/json';

  constructor(private http: HttpClient) { }

  getTopApps(): Observable<AppList> {
    return this.http.get<AppList>(this.apiEndpoint);
  }
}
