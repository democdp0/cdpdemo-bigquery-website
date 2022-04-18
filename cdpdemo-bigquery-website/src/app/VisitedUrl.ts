export class VisitedUrl
{

    email:string;
    url_visited:string;


    VisitedUrlCol : string[] = ["email","url_visited" ];
    constructor(email: string, url_visited: string)
    {
        this.email = email;
        this.url_visited = url_visited;
 
    }


}