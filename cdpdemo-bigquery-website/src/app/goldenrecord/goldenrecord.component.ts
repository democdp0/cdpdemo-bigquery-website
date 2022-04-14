
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from '../rest.service';
import { Users } from '../Users';

@Component({
  selector: 'app-goldenrecord',
  templateUrl: './goldenrecord.component.html',
  styleUrls: ['./goldenrecord.component.css']
})
export class GoldenrecordComponent implements OnInit {
  columns : string[] = ["Address","Name" ,"Email", "city" , "country", "primaryKey","date"];
  constructor(private rs: RestService, private cookieService: CookieService ) { }
    
  users : Users[] = [];
  loaded = false;
  ngOnInit(): void {
    console.log("init");
    this.getLoggedInUser();
    this.rs.getGoldenRecord().subscribe
    (
      (response)=>
      {
        this.loaded = true;
        this.users=response;
    
      },
      (error) => console.log(error)
    )
  }

  getKey(str : string)
  {
    return str as keyof Users;
  }

  getLoggedInUser()
  {
    console.log("getting cookies")
    var cookies = this.cookieService.getAll();

    for(var attributename in cookies){
      console.log(attributename+": "+cookies[attributename]);
  }
  }


}
