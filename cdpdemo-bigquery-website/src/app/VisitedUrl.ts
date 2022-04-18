export class VisitedUrl
{

    Email:string;
    VisitedUrl:string;


    VisitedUrlCol : string[] = ["Email","VisitedUrl" ];
    constructor(email: string, VisitedUrl: string)
    {
        this.Email = email;
        this.VisitedUrl = VisitedUrl;
 
    }


}