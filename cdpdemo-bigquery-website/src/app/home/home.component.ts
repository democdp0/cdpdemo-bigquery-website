import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from '../rest.service';
import { Users } from '../Users';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LoggedUserService } from '../logged-user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor( private cookieService: CookieService, private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document, private loggedUser: LoggedUserService ) {

     }
    
  ngOnInit(): void {

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
        {
      


        window.addEventListener("message", receiveMessage, false);
        function receiveMessage (event) {
             console.log(event.data);
             var str = event.data.split(":");
             if(str[0]=="userid")
             {
                if(parseInt(str[1]) >1 )
                {
                  console.log("normal user");
                  refreshGraph(true);
                }
                else
                {
                  console.log("admin or not logged in");
                  refreshGraph(false);
                }
             }
         
         }


        
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
   
  }

   refreshGraph(isUser : boolean)
  {
    console.log(isUser + ">>");
    //this.loggedUser.myMethod
  }

}
