import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newFeature'
})
export class NewFeaturePipe implements PipeTransform {

  transform(value: string, replacement: string): string {
    return value.replace(/[0-9]/g, replacement);
  }

}
