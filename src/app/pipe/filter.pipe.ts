
import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../models/appList.model';


@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Entry[], filterString: string): any[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredUsers: any[] = [];
    for (let app of value) {
      const name = app['im:name'].label.toLowerCase();
      const category = app.category.attributes.label.toLowerCase();
      const term = filterString.toLowerCase();
      if (name.includes(term) || category.includes(term)) {
        filteredUsers.push(app);
      }
    }
    return filteredUsers;
  }
}