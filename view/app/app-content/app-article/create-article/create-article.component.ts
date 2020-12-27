import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {
    FormArray, FormControl,
    FormBuilder, FormGroup, ValidationErrors, Validators
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { id_ID, NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { UploadResult, MdEditorOption } from './../../../../public_api';

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
        private modal: NzModalRef,
        private _domSanitizer: DomSanitizer
    ) { }
    onSubmit(): void {
        for (const key in this.formData.controls) {
            if (key) {
                this.formData.controls[key].markAsDirty();
                this.formData.controls[key].updateValueAndValidity();
            }
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
        // private String headTitle;
        // private String headKeywords;
        // private String headDescription;
        // private String author;
        this.content = this.params?.content || null;
        let vOlist: any = {
            title: [this.params?.title || ''],
            summary: [this.params?.summary || ''],
            isTop: [this.params?.isTop || 0],
            headTitle: [this.params?.headTitle || ''],
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
