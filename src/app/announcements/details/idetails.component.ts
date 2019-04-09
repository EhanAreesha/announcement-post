
interface IAnnouncementDetails {
    id?:string;
    title?:string;
    body?:string;
    publishedDate?:string;
    image?:string;
}

interface IDetails {
    announcementId?:string;
    announceDetails?: IAnnouncementDetails;
}