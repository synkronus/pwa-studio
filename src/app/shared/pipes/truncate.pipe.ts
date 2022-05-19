import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if(!value) return;
    if (completeWords) {
      if (!!value && value.length < limit) { return value; } else { return `${value.substr(0, limit)}${ellipsis}` }
      // limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return (!!value && value.length > limit) ? value.substr(0, limit) + ellipsis : value;
  }
}