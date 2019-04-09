import { Component } from '@angular/core';
import { AnnouncementService } from '../announcements.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
    selector: 'course-play',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class AnnouncementDetailsComponent {

    idetails: IDetails;

    constructor(private route: ActivatedRoute, private _announcementService: AnnouncementService) {
    }

    ngOnInit() {
        this.idetails = {announcementId: null};
        this.idetails.announceDetails = {title: "", body: "", publishedDate: "", image: ""}
        this.idetails.announcementId = this.route.snapshot.paramMap.get("announcementId")
        if(this.idetails.announcementId != null) {
            this._announcementService.getDataById(this.idetails.announcementId).subscribe((data: IAnnouncementDetails) => {
                this.idetails.announceDetails = data;
              });
        }
    }

}