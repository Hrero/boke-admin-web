import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../ng-sevice/http.service';
import { PowerService } from '../../../ng-sevice/power.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ZglFormsComponent } from '../../../ng-component/zgl-forms/zgl-forms.component';
import { FilterType } from '../../../ng-component/zgl-type/filter.type';
import { isEmpty } from 'zgl-utils-js';

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
    public postParams = {};
    constructor(
        private https: HttpService,
        private powerService: PowerService,
        private modalService: NzModalService
    ) { }
    public createArticle(data?) {
        const formsCtrls: FilterType[] = [
            { label: '文章名称', type: 'text', key: 'title' },
            { label: '文章描述', type: 'text', key: 'summary' },
            { label: '是否置顶', type: 'select', key: 'isTop', optionList: [
                { name: '否', value: 0 },
                { name: '是', value: 1 }
            ]},
            { label: '分类', type: 'select', key: 'sortId', optionList: [
                { name: '开发者手册', value: 1 },
                { name: 'JAVA', value: 2 },
                { name: 'JS', value: 3 },
                { name: '音乐', value: 4 }
            ]},
            { label: '文章内容', type: 'area', key: 'content' }
        ];
        const modal = this.modalService.create({
            nzTitle: data? '编辑文章': '添加文章',
            nzWidth: 650,
            nzContent: ZglFormsComponent,
            nzComponentParams: {
                formsCtrl: formsCtrls,
                formsData: data,
                type: 'modal'
            },
            nzFooter: null
        });
        modal.afterClose.subscribe(result => {
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
                    console.log(res, 'res');
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
