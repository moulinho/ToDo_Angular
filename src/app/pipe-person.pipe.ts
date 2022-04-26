import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePerson',
})
export class PipePersonPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 0 && value.length <= 10) {
      return value.substring(0, 5);
    } else {
      return '';
    }
  }
}
