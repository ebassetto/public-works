import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(text: string, maxLength = 10): string {
    if (text.length > maxLength) {
        let truncated: string = text.substring(0, maxLength).trim() + '...';
        return truncated;
    }
    return text;
  }
}