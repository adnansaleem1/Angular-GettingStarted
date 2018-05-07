import {PipeTransform, Pipe} from '@angular/core';
@Pipe({
    name: 'convertToSpaces',    
})
export class ConverToSpace implements PipeTransform {
    transform(value: any,char: any[]) {
    return value.replace(char,' ');
    }
}