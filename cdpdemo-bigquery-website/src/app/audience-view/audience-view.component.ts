import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-audience-view',
  templateUrl: './audience-view.component.html',
  styleUrls: ['./audience-view.component.css']
})
export class AudienceViewComponent implements OnInit {

  constructor(private rs: RestService ) { }

  ngOnInit(): void {

    this.rs.getNeo4jJson("24").subscribe
    (
      (response)=>
      {
       console.log(response);

      },
      (error) => console.log(error)
    )


  }

}
