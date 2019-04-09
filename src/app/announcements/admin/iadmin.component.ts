
interface IArchivedAnnouncements {
    id?:string;
    title?:string;
    isFeatured?: boolean;
    modifiedDate?:string;
    modifiedBy?:string;
    status?:string;
}
interface IDraftAnnouncements {
    id?:string;
    title?:string;
    isFeatured?: boolean;
    modifiedDate?:string;
    modifiedBy?:string;
    status?:string;
}
interface IPublishedAnnouncements {
    id?:string;
    title?:string;
    isFeatured?: boolean;
    modifiedDate?:string;
    modifiedBy?:string;
    status?:string;
}

interface IAdmin {
    archivedAnnouncements?: IArchivedAnnouncements[];
    draftAnnouncements?: IDraftAnnouncements[];
    publishedAnnouncements?: IPublishedAnnouncements[];
    tempArchived?: IArchivedAnnouncements[];
    tempDraft?: IDraftAnnouncements[];
    tempPublish?: IPublishedAnnouncements[];
    totalDraftRecords?:number;
    totalArchivedRecords?:number;
    totalPublishedRecords?:number;

}