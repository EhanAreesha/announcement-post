
interface IAnnouncements {
    id?:string;
    title?:string;
    body?:string;
    summary?:string;
    status?:string;
    isFeatured?: boolean;
    expiryDate?:string;
    imageUrl?:string;
}

interface ImageSnippet {
    src?: string;
    file?: File;
  }


interface ICreateUpdate {
    announcementId?:string;
    buttonText?:string;
    announcement?: IAnnouncements;
    imageSnippet?: ImageSnippet;
}
  