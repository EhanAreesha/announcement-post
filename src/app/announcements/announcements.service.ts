import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable()
export class AnnouncementService {

    _url_list = "https://lmswebapp.azurewebsites.net/api/announcements";
    
    _url_details = "./../../assets/data/mock-announcement-details.json"
    _url_edit = "./../../assets/data/mock-announcements-edit.json"
    
    //_url_list = "./../../assets/data/mock-announcements-list.json"
    //_url_published = "./../../assets/data/mock-annoucements-list-admin-published.json"
    //_url_archived = "./../../assets/data/mock-annoucements-list-admin-archived.json"
    //_url_draft = "./../../assets/data/mock-annoucements-list-admin-draft.json"


    _url_published = "https://lmswebapp.azurewebsites.net/api/announcements"
    _url_archived = "https://lmswebapp.azurewebsites.net/api/announcements?Status=archived"
    _url_draft = "https://lmswebapp.azurewebsites.net/api/announcements?Status=draft"
    
    

    constructor(private http: HttpClient) {}

    post(annoucements: IAnnouncements): Observable<IAnnouncements>{  
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'true',
            })
          };
        debugger;  
        return this.http.post(this._url_list, JSON.stringify(annoucements)
        , httpOptions)
    }
    
    
    getAnnouncementListData(): Observable<IAnnouncementsList[]> {
        return this.http.get<IAnnouncementsList[]>(this._url_list);
    }

    // getDetailsData(): Observable<IAnnouncementDetails> {
    //     return this.http.get<IAnnouncementDetails>(this._url_details);
    // }

    getDataById(id:string): Observable<IAnnouncements> {
        return this.http.get<IAnnouncements>(this._url_list + '/' + id);
    }

    getDraftData(): Observable<IDraftAnnouncements[]> {
        return this.http.get<IDraftAnnouncements[]>(this._url_draft);
    }
    
    getArchivedData(): Observable<IArchivedAnnouncements[]> {
        return this.http.get<IArchivedAnnouncements[]>(this._url_archived);
    }

    getPublishedData(): Observable<IPublishedAnnouncements[]> {
        return this.http.get<IPublishedAnnouncements[]>(this._url_published);
    }
}