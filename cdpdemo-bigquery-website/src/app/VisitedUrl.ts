export class VisitedUrl
{

    Email:string;
    VisitedUrl:string;


    VisitedUrlCol : string[] = ["Email","url_visited" ];
    constructor(email: string, VisitedUrl: string)
    {
        this.Email = email;
        this.VisitedUrl = VisitedUrl;
 
    }


}