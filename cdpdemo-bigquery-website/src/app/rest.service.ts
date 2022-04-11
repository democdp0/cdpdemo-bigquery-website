import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "http://34.142.161.251/wordpressdb"
  goldenRecordUrl : string = "http://34.142.161.251/goldenrecord"

  getUsers()
  {
    return this.http.get<Users[]>(this.url);
  }

  getGoldenRecord()
  {
    return this.http.get<Users[]>(this.url);
  }
}