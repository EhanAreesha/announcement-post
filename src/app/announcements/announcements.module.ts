import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {EditorModule} from "primeng/components/editor/editor"; 
import {SharedModule} from "primeng/components/common/shared";
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {DataTableModule} from 'primeng/datatable';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { AnnouncementCreateComponent } from './create-update/create-update.component';
import { AnnouncementsAdminComponent } from './admin/admin.component';
import { AnnouncementListComponent } from './list/list.component';
import { AnnouncementDetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';
import { AnnouncementService } from './announcements.service';
import { AnnouncementsComponent } from './announcements.component';


@NgModule({
  declarations: [
    AnnouncementsComponent,
    AnnouncementCreateComponent,
    AnnouncementListComponent,
    AnnouncementDetailsComponent,
    AnnouncementsAdminComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule,
    ToastModule,
    EditorModule,
    TableModule,
    TabViewModule,
    SharedModule,
    CheckboxModule,
    DataTableModule,
    CalendarModule,
    FileUploadModule,
    PaginatorModule,
    ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService, AnnouncementService]
})
export class AnnounceModule {
  constructor() {
  }

}
