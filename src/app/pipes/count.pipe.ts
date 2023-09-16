import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  transform(value: number): string {
    return value ? (value > 0 ? '(+' : '(') + String(value) + ')' : '';
  }
}
