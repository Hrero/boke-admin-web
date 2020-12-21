import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        let txt = null;
        switch (value) {
            case 1:
                txt = '开发者手册'

            case 2:
                txt = 'JAVA'
            case 3:
                txt = 'JS'
            case 4:
                txt = '音乐'
            default:
                txt = '-'
        }
        return txt;
    }

}
