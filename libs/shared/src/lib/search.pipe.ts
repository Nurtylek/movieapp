import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(values: any[], searchToken: string): any {
        if (searchToken == null)
            searchToken = '';

        searchToken = searchToken.toLowerCase();

        return values.filter(elem => elem.name.toLowerCase().indexOf(searchToken) > -1);
    }

}
