import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removezero',
  pure:false
})
export class RemovezeroPipe implements PipeTransform {
   transform(items: any[], filter: any): any {
           if (!items || !filter) {
            return items;
        }
              return items.filter(item => item.amount>0);
    }

}
