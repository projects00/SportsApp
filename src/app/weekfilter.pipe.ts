import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekfilter',
  pure:false
})
export class WeekfilterPipe implements PipeTransform {

   transform(items: any[], filter: any): any {
     debugger;
        if (!items || !filter) {
            return items;
        }
              return items.filter(item => item.week==filter.week);
    }

}
