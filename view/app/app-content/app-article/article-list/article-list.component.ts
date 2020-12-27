import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../ng-sevice/http.service';
import { PowerService } from '../../../ng-sevice/power.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ZglFormsComponent } from '../../../ng-component/zgl-forms/zgl-forms.component';
import { FilterType } from '../../../ng-component/zgl-type/filter.type';
import { CreateArticleComponent } from '../create-article/create-article.component';
import { isEmpty } from 'zgl-utils-js';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
    public listOfData: Array<any>;
    public loading = false;
    public total: number;
    public pageNum = 1;
    public pageSize = 10;
    public html = null;
    public postParams = {};
    constructor(
        private https: HttpService,
        private powerService: PowerService,
        private modalService: NzModalService
    ) { }
    public createArticle(data?) {
        const modal = this.modalService.create({
            nzTitle: data? '编辑文章': '添加文章',
            nzWidth: 1200,
            nzContent: CreateArticleComponent,
            nzComponentParams: {
                params: data,
            },
            nzFooter: null
        });
        modal.afterClose.subscribe(result => {
            if (isEmpty(result)) {
                return;
            }
            if (!isEmpty(data)) {
                result.id = data.id
            }
            const params: any = {
                ...result
            }
            if (!isEmpty(params)) {
                this.https.$post(this.powerService.getViewApiUrl({
                    urlKey: 'addOrUpdate'
                }), 'ADMINAPISERVER', params).subscribe(res => {
                    this.getPageInfo()
                });
            }
        });
    }
    getPageInfo(reset: boolean = false): void {
        if (reset) {
            this.pageNum = 1
        }
        const params = {
            ...this.postParams,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        }
        this.loading = true;
        this.https.$post(this.powerService.getViewApiUrl({
            urlKey: 'getArticleList'
        }), 'ADMINAPISERVER',params).subscribe(res => {
            this.loading = false;
            if (res.code === 0) {
                this.listOfData = res.data.list;
                this.total = res?.data?.total;
            }
        })
    }
    ngOnInit(): void {
        this.getPageInfo(true);
    }
}
