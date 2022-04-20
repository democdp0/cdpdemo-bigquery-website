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

  url : string = "https://api.cdpdemo.com/wordpressdb"
  goldenRecordUrl : string = "https://api.cdpdemo.com/goldenrecord"
  usersfromecommerceb : string = "https://api.cdpdemo.com/usersfromecommerceb"
  usersaovecommerceb : string = "https://api.cdpdemo.com/usersaovecommerceb"
  visitedurl : string = "https://api.cdpdemo.com/visitedurl"

  getNeo4jJson(id:string): Observable<any> {
    return this.http.post('https://api.cdpdemo.com/neo4jjson', { id: id });
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