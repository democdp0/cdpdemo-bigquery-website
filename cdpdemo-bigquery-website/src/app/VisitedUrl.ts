export class VisitedUrl
{

    Email:string;
    url_visited:string;


    VisitedUrlCol : string[] = ["Email","url_visited" ];
    constructor(email: string, url_visited: string)
    {
        this.Email = email;
        this.url_visited = url_visited;
 
    }


}