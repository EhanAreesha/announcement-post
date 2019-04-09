import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementListComponent } from './announcements/list/list.component';
import { AnnouncementCreateComponent } from './announcements/create-update/create-update.component';
import { AnnouncementDetailsComponent } from './announcements/details/details.component';
import { AnnouncementsAdminComponent } from './announcements/admin/admin.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

const routes: Routes = [
  { path: 'announcements', component: AnnouncementsComponent},
  { path: 'admin', component: AnnouncementsAdminComponent},
  { path: 'create-update', component: AnnouncementCreateComponent},
  { path: 'create-update/:announcementId', component: AnnouncementCreateComponent},
  { path: 'details/:announcementId', component: AnnouncementDetailsComponent},
  { path: 'list', component: AnnouncementListComponent},
  { path: '**',                           redirectTo: 'announcements'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
