import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AnnouncementService } from '../announcements.service';
import { ConfirmationService } from 'primeng/api';
declare var $: any;

@Component({
    selector: 'course-play',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})
export class AnnouncementCreateComponent {

    icreateUpdate: ICreateUpdate;
    announcement: IAnnouncements;

    constructor(private route: ActivatedRoute, private _announcementService: AnnouncementService, private confirmationService: ConfirmationService) {
    }

    ngOnInit() {
        this.initObject();
        this.icreateUpdate.announcementId = this.route.snapshot.paramMap.get("announcementId")
        if(this.icreateUpdate.announcementId != null) {
            this._announcementService.getDataById(this.icreateUpdate.announcementId).subscribe((data: IAnnouncements) => {
                 this.icreateUpdate.announcement = data;
                 this.icreateUpdate.buttonText = 'Edit';
                 debugger;
            });
        } else {
            this.icreateUpdate.buttonText = 'Save';
            this.icreateUpdate.announcement = {title: "", body: "", summary: "", isFeatured: false, imageUrl: ""}
        }
    }

    initObject() {
        this.icreateUpdate = {};
        this.icreateUpdate.buttonText = 'Save';
        this.icreateUpdate.announcement = {title: "", body: "", summary: "", isFeatured: false, expiryDate: "", imageUrl: ""}
    }

    onBasicUpload(image:any) {
        const file: File = image.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event: any) => {
            this.icreateUpdate.imageSnippet = {src: event.target.result, file: file};
            this.icreateUpdate.announcement.imageUrl = this.icreateUpdate.imageSnippet.src;
        });
        reader.readAsDataURL(file);
    }

    publish() {
        if(!this.checkFields()) {
            return false;
        }
        this.confirmationService.confirm({
            message: 'Do you want to publish this announcement?',
            header: 'Publish Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                console.log("Publish confirm for: ");
                this.icreateUpdate.announcement.status = 'published';
                console.log(this.icreateUpdate.announcement)
            },
            reject: () => {
                console.log("Publish rejected!");
            }
        });
    }

    save() {
        if(!this.checkFields()) {
            return false;
        }
        this.confirmationService.confirm({
            message: 'Do you want to save this announcement?',
            header: this.icreateUpdate.buttonText+' Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                console.log("Save confirm for: ");
                this.icreateUpdate.announcement.status = 'Draft';
                this.icreateUpdate.announcement.expiryDate = "04/04/2019";
                this._announcementService.post(this.icreateUpdate.announcement);
                console.log('Saved');
            },
            reject: () => {
                console.log("Save rejected!");
            }
        });
    }

    delete() {
        if(!this.checkFields()) {
            return false;
        }
        this.confirmationService.confirm({
            message: 'Do you want to delete this announcement?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                console.log("Deletion confirm for: ");
                this.icreateUpdate.announcement.status = 'archived';
                console.log(this.icreateUpdate.announcement)
                this.initObject();
            },
            reject: () => {
                console.log("Deletion rejected!");
            }
        });
    }
    checkFields() {
        if(this.icreateUpdate.announcement.title == '') {
            alert('Title is empty.');
            return false;
        } else if (this.icreateUpdate.announcement.summary == '') {
            alert('Summary is empty.');
            return false;
        } else if (this.icreateUpdate.announcement.body == '') {
            alert('Body is empty.');
            return false;
        }
        return true;
    }
}