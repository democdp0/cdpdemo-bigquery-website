
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../Users';

@Component({
  selector: 'app-goldenrecord',
  templateUrl: './goldenrecord.component.html',
  styleUrls: ['./goldenrecord.component.css']
})
export class GoldenrecordComponent implements OnInit {
  columns : string[] = ["Address","Name" ,"Email", "city" , "country", "primaryKey"];
  constructor(private rs: RestService ) { }
  users : Users[] = [];
  loaded = false;
  ngOnInit(): void {

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


}
