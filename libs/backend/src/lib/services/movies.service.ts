import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieRes, MovieResponseModel } from '@movieapp/core';
import { map } from 'rxjs/operators';
export const API_URL = new InjectionToken<string>('api.url passed from root module');

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(@Inject(API_URL) private apiUrl: string, private http: HttpClient) { }


    public getMovies(): any {
        return this.http.get<any>(`${this.apiUrl}`);
    }

    public getMovieById(id: number): Observable<MovieResponseModel> {
        return this.http.get<MovieResponseModel>(`${this.apiUrl}/${id}`).pipe(
            map(r => r ? new MovieResponseModel(r): null)
        )
    }
}
