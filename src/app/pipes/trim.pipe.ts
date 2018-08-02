import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {
  transform(text: string, length: number = 10): string {
    const shortenSymbol = '...';
    const trimmedText =
      text.length <= length ? text : text.substr(0, length) + shortenSymbol;
    return trimmedText;
  }
}
