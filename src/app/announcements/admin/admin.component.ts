import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import { AnnouncementService } from '../announcements.service';
declare var $: any;

@Component({
    selector: 'course-play',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AnnouncementsAdminComponent {

    iadmin: IAdmin;

    constructor(private confirmationService: ConfirmationService, private _announcementService: AnnouncementService, private router: Router) {
    }

    ngOnInit() {
        this.iadmin = {};
        this.initDraftData(this.iadmin.draftAnnouncements);
        this.initArchivedData(this.iadmin.archivedAnnouncements);
        this.initPublishedData(this.iadmin.publishedAnnouncements);
    }

    initDraftData(list: IDraftAnnouncements[]) {
        if(list == undefined) {
            this._announcementService.getDraftData().subscribe((data: IDraftAnnouncements[]) => {
                this.iadmin.draftAnnouncements = data;
                this.iadmin.tempDraft = this.iadmin.draftAnnouncements.slice(0, 15);
                this.iadmin.totalDraftRecords = this.iadmin.draftAnnouncements.length;
            });
        } else {
            this.iadmin.draftAnnouncements = list;
            this.iadmin.tempDraft = this.iadmin.draftAnnouncements.slice(0, 15);
            this.iadmin.totalDraftRecords = this.iadmin.draftAnnouncements.length;
        }
    }

    initPublishedData(list: IDraftAnnouncements[]) {
        if(list == undefined) {
            this._announcementService.getPublishedData().subscribe((data: IDraftAnnouncements[]) => {
                this.iadmin.publishedAnnouncements = data;
                this.iadmin.tempPublish = this.iadmin.publishedAnnouncements.slice(0, 15);
                this.iadmin.totalPublishedRecords = this.iadmin.publishedAnnouncements.length;
            });
        } else {
            this.iadmin.publishedAnnouncements = list;
            this.iadmin.tempPublish = this.iadmin.publishedAnnouncements.slice(0, 15);
            this.iadmin.totalPublishedRecords = this.iadmin.publishedAnnouncements.length;
        }
    }

    initArchivedData(list: IDraftAnnouncements[]) {
        if(list == undefined) {
            this._announcementService.getArchivedData().subscribe((data: IDraftAnnouncements[]) => {
                this.iadmin.archivedAnnouncements = data;
                this.iadmin.tempArchived = this.iadmin.archivedAnnouncements.slice(0, 15);
                this.iadmin.totalArchivedRecords = this.iadmin.archivedAnnouncements.length;
            });
        } else {
            this.iadmin.archivedAnnouncements = list;
            this.iadmin.tempArchived = this.iadmin.archivedAnnouncements.slice(0, 15);
            this.iadmin.totalArchivedRecords = this.iadmin.archivedAnnouncements.length;
        }
    }

    editPublished(id:string) {       
        console.log("Edited published id is: "+id);
        this.router.navigate(["create-update", id]);
    }

    deletePublished(id:string) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this announcement?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.iadmin.tempPublish = [];
                this.iadmin.publishedAnnouncements.forEach(element => {
                    if(id != element.id) {
                        this.iadmin.tempPublish.push(element);
                    }
                });
                console.log("Deleted published id is: "+id);
                this.iadmin.publishedAnnouncements = this.iadmin.tempPublish;
                this.initPublishedData(this.iadmin.tempPublish);
            },
            reject: () => {
                console.log("Deletion rejected!");
            }
        });
    }

    editArchived(id:string) {
        console.log("Edited archived id is: "+id);
        this.router.navigate(["create-update", id]);
    }

    deleteArchived(id:string) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this announcement?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.iadmin.tempArchived = [];
                this.iadmin.archivedAnnouncements.forEach(element => {
                    if(id != element.id) {
                        this.iadmin.tempArchived.push(element);
                    }
                });
                console.log("Deleted archived id is: "+id);
                this.iadmin.archivedAnnouncements = this.iadmin.tempArchived;
                this.initArchivedData(this.iadmin.tempArchived);
            },
            reject: () => {
                console.log("Deletion rejected!");
            }
        });
    }

    editDraft(id:string) {
        console.log("Edited draft id is: "+id);
        this.router.navigate(["create-update", id]);
    }

    deleteDraft(id:string) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this announcement?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.iadmin.tempDraft = [];
                this.iadmin.draftAnnouncements.forEach(element => {
                    if(id != element.id) {
                        this.iadmin.tempDraft.push(element);
                    }
                });
                console.log("Deleted draft id is: "+id);
                this.iadmin.draftAnnouncements = this.iadmin.tempDraft;
                this.initDraftData(this.iadmin.tempDraft);
            },
            reject: () => {
                console.log("Deletion rejected!");
            }
        });
    }

    archivedPaginate(event: LazyLoadEvent) {
        setTimeout(() => {
            this.iadmin.tempArchived = this.iadmin.archivedAnnouncements.slice(event.first, event.first+event.rows);
        }, 250);
    }

    draftPaginate(event: LazyLoadEvent) {
        setTimeout(() => {
            this.iadmin.tempDraft = this.iadmin.draftAnnouncements.slice(event.first, event.first+event.rows);
        }, 250);
    }

    publishedPaginate(event: LazyLoadEvent) {
        setTimeout(() => {
            this.iadmin.tempPublish = this.iadmin.publishedAnnouncements.slice(event.first, event.first+event.rows);
        }, 250);
    }
}