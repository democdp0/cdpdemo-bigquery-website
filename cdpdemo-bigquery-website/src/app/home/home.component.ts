import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from '../rest.service';
import { Users } from '../Users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor( private cookieService: CookieService ) { }
    
  ngOnInit(): void {

    this.getLoggedInUser();
   
  }
  getLoggedInUser()
  {
    console.log("getting cookies")
    const cookies: {} = this.cookieService.getAll();

    this.cookieService.set('test', 'Hello World');
      console.log(JSON.stringify(cookies));

  }

}
