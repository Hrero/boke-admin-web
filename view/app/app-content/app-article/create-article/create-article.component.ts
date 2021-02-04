import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {
    FormArray, FormControl,
    FormBuilder, FormGroup, ValidationErrors, Validators
} from '@angular/forms';
import { HttpService } from '../../../ng-sevice/http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PowerService } from '../../../ng-sevice/power.service';
import { id_ID, NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { UploadResult, MdEditorOption } from './../../../../public_api';
import { mathFloor, isEmpty } from 'zgl-utils-js';

@Component({
    selector: 'app-create-article',
    templateUrl: './create-article.component.html',
    styleUrls: ['./create-article.component.less']
})
export class CreateArticleComponent implements OnInit {

    @Input() params;
    public formData: FormGroup;
    public content: string;
    public mode: string = 'editor';
    public html: String;
    public that = this;
    public cascaderOptionList = [];
    public options1 = [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                  isLeaf: true
                }
              ]
            },
            {
              value: 'ningbo',
              label: 'Ningbo',
              isLeaf: true
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                  isLeaf: true
                }
              ]
            }
          ]
        }
      ];
    public ARTICLE_BANNER_PICTURE = [
        'https://static2.zugeliang01.com/lease/img/ed1c0d80-4c52-11eb-ae90-614ce6e0f14d.jpg',
        'https://static2.zugeliang01.com/lease/img/fe333490-4c52-11eb-ae90-614ce6e0f14d.jpg',
        'https://static2.zugeliang01.com/lease/img/07c91fb0-4c53-11eb-942f-df0c36395158.png',
        'https://static2.zugeliang01.com/lease/img/0ff9d580-4c53-11eb-942f-df0c36395158.jpg',
        'https://static2.zugeliang01.com/lease/img/18ab2d00-4c53-11eb-ae90-614ce6e0f14d.jpg',
        'https://static2.zugeliang01.com/lease/img/200224a0-4c53-11eb-ae90-614ce6e0f14d.jpg',
        'https://static2.zugeliang01.com/lease/img/2db7f840-4c53-11eb-942f-df0c36395158.jpg',
        'https://static2.zugeliang01.com/lease/img/367a66c0-4c53-11eb-942f-df0c36395158.jpg',
        'https://static2.zugeliang01.com/lease/img/4f6fb6d0-4c53-11eb-ae90-614ce6e0f14d.jpg',
        'https://static2.zugeliang01.com/lease/img/575b2640-4c53-11eb-942f-df0c36395158.jpg'
    ]

    public arrPic = [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F201503%2F29%2F20150329150104_KkuVB.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614663091&t=e6159825c78ba3a65c1bb03d282a5f75',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=51997743,3299698720&fm=26&gp=0.jpg'
    ]
    public options: MdEditorOption = {
        showPreviewPanel: true,
        enablePreviewContentClick: false,
        resizable: true,
        customRender: {
            image: function (href: string, title: string, text: string) {
                let out = `<img style="max-width: 100%; border: 20px solid red;" src="${href}" alt="${text}"`;
                if (title) {
                    out += ` title="${title}"`;
                }
                out += (<any>this.options).xhtml ? "/>" : ">";
                return out;
            }
        },
        markedjsOpt: {
            sanitize: true
        }
    };
    constructor(
        private fb: FormBuilder,
        private powerService: PowerService,
        private modal: NzModalRef,
        private https: HttpService,
        private _domSanitizer: DomSanitizer
    ) { }
    onSubmit(): void {
        for (const key in this.formData.controls) {
            if (key) {
                this.formData.controls[key].markAsDirty();
                this.formData.controls[key].updateValueAndValidity();
            }
        }
        if (isEmpty(this.formData.value.picture)) {
            this.formData.value.picture = this.ARTICLE_BANNER_PICTURE[mathFloor(10, 0)]
        }
        console.log( this.formData.value.sortId, this.formData.value.sortId.length,'this.formData.value');
        if (!isEmpty(this.formData.value.sortId)) {
            if (typeof this.formData.value.sortId !== 'number') {
                this.formData.value.sortId = this.formData.value.sortId[this.formData.value.sortId.length - 1]
                
            }
            console.log( this.formData.value, 'this.formData.value');
        }
        const postValue = {
            ...this.formData.value,
            html: this.html,
            content: this.content
        }
        this.modal.destroy(postValue);
    }

    onEditorLoaded(editor) { // 加载ace编辑器时激发。
        console.log(`ACE Editor Ins: `, editor);
    }

    preRender(mdContent) { // 这不会影响ngModel的值，只影响渲染值 非html
        this.content = mdContent;
        return mdContent;
    }
    postRender = (html) => { // 在更新dom之前更改marked生成的html源代码
        // this.htmlService.setHtmlInfo(html);
        this.html = html;
        return html;
    }
    onPreviewDomChanged(dom: HTMLElement) { // 预览dom触发
        // this.html = dom;
    }
    cancel(e) {
        this.that = this;
        this.modal.destroy();
    }
    ngOnInit() {
        this.https.$get(this.powerService.getViewApiUrl({
            urlKey: 'getClassList'
        }), 'ADMINAPISERVER',{}).subscribe(res => {
            if (res.code === 0) {
                this.cascaderOptionList = res.data
            }
        })
        this.content = this.params?.content || null;
        let vOlist: any = {
            title: [this.params?.title || ''],
            summary: [this.params?.summary || ''],
            isTop: [this.params?.isTop || 0],
            headTitle: [this.params?.headTitle || ''],
            picture: [this.params?.picture || this.arrPic[mathFloor(2, 0)]],
            headKeywords: [this.params?.headKeywords || ''],
            headDescription: [this.params?.headDescription || ''],
            author: [this.params?.author || ''],
            sortId: [this.params?.sortId || '']
        }
        this.formData = this.fb.group(vOlist);
        // let contentArr = ['# Hello, Markdown Editor!'];
        // contentArr.push('```javascript ');
        // contentArr.push('function Test() {');
        // contentArr.push('	console.log("Test");');
        // contentArr.push('}');
        // contentArr.push('```');
        // contentArr.push(' Name | Type');
        // contentArr.push(' ---- | ----');
        // contentArr.push(' A | Test');
        // contentArr.push('![](http://lon-yang.github.io/markdown-editor/favicon.ico)');
        // contentArr.push('');
        // contentArr.push('- [ ] Taks A');
        // contentArr.push('- [x] Taks B');
        // contentArr.push('- test');
        // contentArr.push('');
        // contentArr.push('[Link](https://www.google.com)');
        // contentArr.push('');
        // this.content = contentArr.join('\r\n');
        // getClassList
    }
    doUpload(files: Array<File>): Promise<Array<UploadResult>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result: Array<UploadResult> = [];
                for (let file of files) {
                    result.push({
                        name: file.name,
                        url: `https://avatars3.githubusercontent.com/${file.name}`,
                        isImg: file.type.indexOf('image') !== -1
                    })
                }
                resolve(result);
            }, 3000);
        });
    }
   // togglePreviewPanel() {
    //     this.options.showPreviewPanel = !this.options.showPreviewPanel;
    //     this.options = Object.assign({}, this.options);
    // }

    // changeMode() {
    //     if (this.mode === 'editor') {
    //         this.mode = 'preview';
    //     } else {
    //         this.mode = 'editor';
    //     }
    // }

    // togglePreviewClick() {
    //     this.options.enablePreviewContentClick = !this.options.enablePreviewContentClick;
    //     this.options = Object.assign({}, this.options);
    // }

    // toggleResizeAble() {
    //     this.options.resizable = !this.options.resizable;
    //     this.options = Object.assign({}, this.options);
    // }

}
