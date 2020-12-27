import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'htmlStr'
})
export class HtmlStrPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        let txt = '';
        console.log(typeof value);
        if (typeof value === 'string') {
            txt = value.toString().slice(0, 10);
        }
        return txt
    }

}
