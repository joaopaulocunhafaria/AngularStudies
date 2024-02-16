import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString==="") {
      return value;
    } else {
      const result = [];

      value.forEach(element => {
       if ( element[propName] === filterString) {
        
        result.push(element)
       }
      });

      return result;


    }


  }

}
