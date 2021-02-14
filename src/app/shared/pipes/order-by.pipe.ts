import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, key: string, isAsc: boolean = true): Array<any> {
    console.log(isAsc);
    return value.sort((a: any, b: any) => (a[key] < b[key]) ? (isAsc ? -1 : 1) : (isAsc ? 1 : -1));
  }

}
