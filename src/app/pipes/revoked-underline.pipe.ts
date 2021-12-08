import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revokedUnderline',
})
export class RevokedUnderlinePipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.split('_').join(' ') : '';
  }
}
