// Generated by https://quicktype.io

export class Mockdata {
    results: Result[];

    constructor(...models: Partial<Mockdata>[]) {
        Object.assign(this, ...models);

        if (this.results) {
            this.results = this.results.map(item => new Result(item));
        }
    }
}

export class Result {
    id:          number;
    key:         string;
    name:        string;
    description: string;
    genres:      string[];
    rate:        string;
    length:      string;
    img:         string;

    constructor(...models: Partial<Result>[]) {
        Object.assign(this, ...models);
    }
}
