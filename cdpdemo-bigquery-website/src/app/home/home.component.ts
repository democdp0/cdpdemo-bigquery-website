import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../Users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  columns : string[] = ["Address","Name" ,"Email", "city" , "country", "primaryKey"];
  constructor(private rs: RestService ) { }
  users : Users[] = [];
  loaded = false;
  ngOnInit(): void {

    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.loaded = true;
        this.users=response;
  
        for (const element of this.users) {
          console.log(element["Name"])
      }
    
      },
      (error) => console.log(error)
    )
  }

  getKey(str : string)
  {
    return str as keyof Users;
  }


}
