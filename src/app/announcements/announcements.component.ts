import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
    templateUrl: './announcements.component.html',
    styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent {

    constructor(private router: Router) {
    }

    goToAdmin() {
        this.router.navigate(["admin"]);
    }
    goToCreateAnnouncement() {
        this.router.navigate(["create-update"]);
    }
    goToAnnouncementList() {
        this.router.navigate(["list"]);
    }

}