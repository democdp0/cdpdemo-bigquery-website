import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "https://api.cdpdemodashboard.tk/wordpressdb"
  goldenRecordUrl : string = "https://api.cdpdemodashboard.tk/goldenrecord"
  usersfromecommerceb : string = "https://api.cdpdemodashboard.tk/usersfromecommerceb"

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