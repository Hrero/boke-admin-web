import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        let txt = null;
        switch (Number(value)) {
            case 1:
                txt = '开发者手册'
                break;
            case 2:
                txt = 'JAVA'
                break;
            case 3:
                txt = 'JS'
                break;
            case 4:
                txt = '音乐'
                break;
            default:
                txt = '-'
        }
        return txt;
    }

}
