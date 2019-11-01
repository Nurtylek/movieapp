//
export class MovieRes {
    results: MovieResponseModel[];

    constructor(...models: Partial<MovieRes>[]) {
        Object.assign(this, ...models);

        if (this.results) {
            this.results = this.results.map(r => new MovieResponseModel(r));
        }
    }
}

export class MovieResponseModel {
    id:          number;
    key:         string;
    name:        string;
    description: string;
    genres:      string[];
    rate:        string;
    length:      string;
    img:         string;

    constructor(...models: Partial<MovieResponseModel>[]) {
        Object.assign(this, ...models);
    }
}

export type GenreType = 'action' | 'adventure' | 'biography' | 'comedy' | 'crime'
    | 'drama' | 'history' | 'mystery' | 'scifi' | 'sport' | 'thriller';

// export const genreType = {
//     action: 'action' as GenreType,
//     adventure: 'adventure' as GenreType,
//     biography: 'biography' as GenreType,
//     comedy: 'comedy' as GenreType,
//     crime: 'crime' as GenreType,
//     drama: 'drama' as GenreType,
//     history: 'history' as GenreType,
//     mystery: 'mystery' as GenreType,
//     scifi: 'scifi' as GenreType,
//     sport: 'sport' as GenreType,
//     thriller: 'thriller' as GenreType
// };
