import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../Users';
import { SocketService } from '../socket.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
  columns : string[] = ["Address","Name" ,"Email", "city" , "country", "primaryKey","date"];
  constructor(private rs: RestService ,private socketService: SocketService) { }
  users : Users[] = [];
  loaded = false;
  ngOnInit(): void {

    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.loaded = true;
        this.users=response;
    
      },
      (error) => console.log(error)
    )

    this.socketService.getNewMessage().subscribe((data: any) => 
    console.log("reload now")
    
    
    )
  }

  getKey(str : string)
  {
    return str as keyof Users;
  }


}
