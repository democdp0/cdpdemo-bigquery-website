import { Component, NgZone, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from '../rest.service';
import { Users } from '../Users';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LoggedUserService } from '../logged-user.service';
import { throws } from 'assert';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


   userID : number = 0 ; 
  constructor( private cookieService: CookieService, private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document, private loggedUser: LoggedUserService,    private ngZone: NgZone,   ) {

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
              window.angularComponentReference.zone.run(() => { window.angularComponentReference.loadAngularFunction(parseInt(str[1])); });  
               
             }
         
         }


        
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
   
    (window as any) ["angularComponentReference"] = { component: this, zone: this.ngZone, loadAngularFunction: (temp:number) => this.refreshGraph(temp), };  
  }

   refreshGraph(isUser : number)
  {
    console.log(isUser + ">>");
    this.userID = isUser;
    this.loggedUser.myMethod(isUser);
  }

}
