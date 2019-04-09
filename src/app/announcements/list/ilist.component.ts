
interface IAnnouncementsList {
    id?:string;
    title?:string;
    summary?:string;
    isFeatured?: OnBeforeUnloadEventHandlerNonNull;
    publishedDate?:string;
    image?:string;
}

interface ITempAnnouncements {
    id?:string;
    title?:string;
    summary?:string;
    isFeatured?: OnBeforeUnloadEventHandlerNonNull;
    publishedDate?:string;
    image?:string;
}

interface IList {
    totalRecords?:number;
    first?:number;
    announceList?: IAnnouncementsList[];
    tempList?: ITempAnnouncements[];
}