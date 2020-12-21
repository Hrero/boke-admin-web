import { Injectable } from '@angular/core';
import { HttpService } from '../ng-sevice/http.service';

export interface paramsInterface {
    urlKey: string;
    power?: number;
}
@Injectable({
    providedIn: 'root'
})
export class PowerService {
    constructor(
        private httpService: HttpService
    ) { }
    private groupSea = 1; // 集团
    private teamSea = 2; // 团队
    private privateSea = 3; // 私人

    public getViewApiUrl({urlKey, power}: paramsInterface):any {
        const urlList =  {
            getArticleList: '/article/getArticleList', // 文章列表
            addOrUpdate: '/article/addOrUpdate', // 增加文章
        }
        return Object.assign(urlList)[urlKey]
    }

    public getGroupSea(): number {
        return this.groupSea
    }
    public getTeamSea(): number  {
        return this.teamSea
    }
    public getPrivateSea(): number  {
        return this.privateSea
    }
}
