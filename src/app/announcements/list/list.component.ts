import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnnouncementService } from '../announcements.service';
import { LazyLoadEvent } from 'primeng/api';
declare var $: any;

@Component({
    selector: 'course-play',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class AnnouncementListComponent {

    ilist: IList;

    constructor(private router: Router, private _announcementService: AnnouncementService) {
    }

    loadCarsLazy(event: LazyLoadEvent) {
        setTimeout(() => {
            if(this.ilist.announceList) {
                this.ilist.tempList = this.ilist.announceList.slice(event.first, event.first+event.rows);
            }
        }, 250);
    }

    ngOnInit() {
        this.ilist = {tempList: []}
        this._announcementService.getAnnouncementListData().subscribe((data: IAnnouncementsList[]) => {
            this.ilist.announceList = data;
            this.ilist.totalRecords = this.ilist.announceList.length
            this.ilist.tempList = this.ilist.announceList.slice(0, 15);
        });
    }

    details(id) {
        console.log("Details id is: "+id);
        this.router.navigate(["details", id]);
    }
}