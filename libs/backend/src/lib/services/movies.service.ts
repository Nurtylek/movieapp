import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export const API_URL = new InjectionToken<string>('api.url passed from root module');

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(@Inject(API_URL) private apiUrl: string, private http: HttpClient) { }


    public getMovies() {
        return this.http.get(`${this.apiUrl}`);
    }
}
