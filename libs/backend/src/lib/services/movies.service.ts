import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenreType, Movie } from '@movieapp/core';
import { filter, map } from 'rxjs/operators';

export const API_URL = new InjectionToken<string>('api.url passed from root module');

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(@Inject(API_URL) private apiUrl: string, private http: HttpClient) { }

    public getMovies(genres: GenreType[]): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.apiUrl}`).pipe(
            map(r => r ? (genres.length ? r.filter(f => f.genres.some(mov => genres.includes(mov))) : r).map(i => new Movie(i)) : null)
        );
    }

    public getMovieById(id: number): Observable<Movie> {
        return this.http.get<Movie>(`${this.apiUrl}/${id}`).pipe(
            map(r => r ? new Movie(r) : null)
        )
    }
}
