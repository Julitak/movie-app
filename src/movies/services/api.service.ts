import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { APP_CONFIG, AppConfig } from '../../app/app-config.module';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient,
              @Inject(APP_CONFIG) private config: AppConfig) {
  }

  movies = {
    get: (): Observable<any> => this.http.get(`${this.config.apiEndpoint}/movies/`),
    search: (req): Observable<any> => this.http.get(`${this.config.apiEndpoint}/movies/?q=${req}`),
    getOne: (id): Observable<any> => this.http.get(`${this.config.apiEndpoint}/movies/${id}`),
  };

}

