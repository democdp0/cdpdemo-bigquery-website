import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';
import { AOV } from './AOV';
import { VisitedUrl } from './VisitedUrl';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "https://api.cdpdemodashboard.tk/wordpressdb"
  goldenRecordUrl : string = "https://api.cdpdemodashboard.tk/goldenrecord"
  usersfromecommerceb : string = "https://api.cdpdemodashboard.tk/usersfromecommerceb"
  usersaovecommerceb : string = "https://api.cdpdemodashboard.tk/usersaovecommerceb"
  visitedurl : string = "https://api.cdpdemodashboard.tk/visitedurl"

  getNeo4jJson(id:string): Observable<any> {
    return this.http.post('https://api.cdpdemodashboard.tk/neo4jjson', { id: id });
  }

  getVisitedURL()
  {
    return this.http.get<VisitedUrl[]>(this.visitedurl);
  }

  getUsersAOVEcommerceB()
  {
    return this.http.get<AOV[]>(this.usersaovecommerceb);
  }

  getUsersFromEcommerceB()
  {
    return this.http.get<Users[]>(this.usersfromecommerceb);
  }


  getUsers()
  {
    return this.http.get<Users[]>(this.url);
  }

  getGoldenRecord()
  {
    return this.http.get<Users[]>(this.url);
  }
}