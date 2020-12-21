import { Component, OnInit, Inject } from '@angular/core';
import { JurisdictionService } from '../ng-sevice/jurisdiction.service';

@Component({
    selector: 'app-content',
    templateUrl: './app-content.component.html',
    styleUrls: ['./app-content.component.less'],
})
export class AppContentComponent implements OnInit {

    public menuList: Array<any>;

    constructor(
        private jurisdictionService: JurisdictionService
    ) {}

    rollTop() {
        window.scrollTo(0, 0);
    }
    checkPowerList() {
        this.jurisdictionService.setPowerList().subscribe(list => {
            this.menuList = list.menuList;
        });
    }
    ngOnInit() {
        this.checkPowerList();
    }

}

